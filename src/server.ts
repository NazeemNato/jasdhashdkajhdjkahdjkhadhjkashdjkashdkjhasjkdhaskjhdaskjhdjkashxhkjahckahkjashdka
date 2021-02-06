import 'module-alias/register';
import express from 'express';
import loadApolloServer from './loaders/apollo-server';

const app = express();
const apolloServer = loadApolloServer();

apolloServer.applyMiddleware({ app });

app.listen(4000, () => {
  console.log(
    `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`,
  );
});
