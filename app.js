import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import * as path from 'path'
import { fileURLToPath } from 'url';
import { loadFilesSync } from '@graphql-tools/load-files'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { createYoga } from 'graphql-yoga'

// Importing resolvers manually
import { problemResolver } from './modules/problem/problem.resolvers.js'

const app = express();

app.use(cors({
	origin: ['http://localhost:8080', 'http://react:80', 'http://solver:8000', 'http://mongo:27017'],
}));
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// GraphQL app config
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
// const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));
const resolversArray = [problemResolver];
const schema = makeExecutableSchema({
	typeDefs: mergeTypeDefs(typesArray),
	resolvers: mergeResolvers(resolversArray),
})
const graphQLServer = createYoga({schema})

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

export default app;
