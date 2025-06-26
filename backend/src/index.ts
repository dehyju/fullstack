import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import mongoose from 'mongoose';

import { typeDefs, resolvers } from './schema';

async function startApolloServer() {
  // Connect to local MongoDB
  await mongoose.connect('mongodb://localhost:27017/myapp', {
    // useNewUrlParser: true, // (no longer needed in Mongoose 6+)
    // useUnifiedTopology: true,
  });
  console.log('🗄️ Connected to MongoDB');

  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  app.use('/graphql', cors(), express.json(), expressMiddleware(server));

  app.listen({ port: 4000 }, () => {
    console.log('🚀 Server ready at http://localhost:4000/graphql');
  });
}

startApolloServer().catch((error) => {
  console.error('Error starting server:', error);
});
