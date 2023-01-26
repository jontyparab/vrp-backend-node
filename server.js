import app from './app.js'
import {config} from 'dotenv'

config();

const PORT = process.env.PORT || 8080;
// if you're not using docker-compose for local development, this will default to 8080
// to prevent non-root permission problems with 80. Dockerfile is set to make this 80
// because containers don't have that issue :)

const server = app.listen(PORT, function () {
    console.log(`Webserver is ready and listening on port ${PORT}`);
});

let sockets = {}, nextSocketId = 0;
server.on('connection', function (socket) {
  const socketId = nextSocketId++;
  sockets[socketId] = socket;

  socket.once('close', function() {
    delete sockets[socketId];
  });
});

// need this in docker container to properly exit since node doesn't handle SIGINT/SIGTERM
// this also won't work on using npm start since:
// https://github.com/npm/npm/issues/4603
// https://github.com/npm/npm/pull/10868
// https://github.com/RisingStack/kubernetes-graceful-shutdown-example/blob/master/src/index.js
// if you want to use npm then start with `docker run --init` to help, but I still don't think it's
// a graceful shutdown of node process

// quit on ctrl-c when running docker in terminal
process.on('SIGINT', function onSigint () {
	console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString());
    shutdown();
});

// quit properly on docker stop
process.on('SIGTERM', function onSigterm () {
    console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString());
    shutdown();
})

// shut down server
let timer;
function shutdown() {
  waitForSocketsToClose(5);

  server.close(function onServerClosed (err) {
    console.log('Server closed.')
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
    process.exit();
  });
}

function waitForSocketsToClose(counter) {
  if (counter > 0) {
    console.log(`Waiting ${counter} more ${counter !== 1 ? 'seconds' : 'second'} for all connections to close...`);
    timer = setTimeout(waitForSocketsToClose, 1000, counter - 1);
    return 
  }
  clearTimeout(timer);
  console.log("Forcing all connections to close now");
  for (var socketId in sockets) {
    sockets[socketId].destroy();
  }
}