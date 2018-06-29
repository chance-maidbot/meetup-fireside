import 'babel-polyfill';
import 'app-module-path/register';
import express from 'express';
import compression from 'compression';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import DBInterface from 'db/DBInterface';
import { schema } from './graphql';

const GRAPHQL_PORT = 3000;

const graphQLServer = express();

export const db: DBInterface = new DBInterface({
  host: process.env.CASSANDRA_HOST || '127.0.0.1',
  port: process.env.SCYLLA_PORT || '9042',
  keyspace: process.env.CASSANDRA_KEYSPACE || ''
}).client;

graphQLServer.use(compression());
graphQLServer.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      db
    }
  })
);
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
