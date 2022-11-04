const bodyParser = require("body-parser");
const cors = require('cors');
const express = require("express");
const morgan = require('morgan');
const path = require("path");
const { createServer } = require('@graphql-yoga/node')

const app = express();

app.use(cors({
  origin: ['http://react:80', 'http://solver:8000'],
}));
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

const graphQLServer = createServer()
app.use('/graphql', graphQLServer)

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200); 
//   }
//   next();
// });

app.get('/healthz', function (req, res) {
	// do app logic here to determine if app is truly healthy
	// you should return 200 if healthy, and anything else will fail
	// if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
  res.send('I am happy and healthy\n');
});

module.exports = app;
