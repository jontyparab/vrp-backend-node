const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { createServer } = require('@graphql-yoga/node')


// const { graphqlHTTP } = require("express-graphql");
const graphQLServer = createServer()

//const graphqlSchema = require("./graphql/schema");
//const graphqlResolver = require("./graphql/resolver");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200); //browser send options req before post/patch/put.. , express-graphql declines req which is not post or get req
    //empty response status code of 200, option req never make it to graphql endpoint but still get a valid response and continues
  }
  next();
});

app.get('/healthz', function (req, res) {
	// do app logic here to determine if app is truly healthy
	// you should return 200 if healthy, and anything else will fail
	// if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
  res.send('I am happy and healthy\n');
});

app.use('/graphql', graphQLServer)
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: graphqlSchema,
//     rootValue: graphqlResolver,
//     graphiql: true,
//     formatError(err) {
//       if (!err.originalError) {
//         return err;
//       }
//       const data = err.originalError.data;
//       const message = err.message || "An error occurred.";
//       const code = err.originalError.code || 500;
//       return { message: message, status: code, data: data };
//     },
//   })
// );

// mongoose
//   .connect(
//     "url"
//   )
//   .then((result) => {
//     app.listen(8080);
//   })
//   .catch((err) => console.log(err));

module.exports = app;