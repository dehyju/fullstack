import express, { Application } from 'express';;
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schema';

async function startServer() {
  const app: Application = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

server.applyMiddleware({ app: app as any });

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
  });
}

startServer();