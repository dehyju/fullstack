import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import mongoose from 'mongoose';
import { typeDefs, resolvers } from './schema';

async function startServer() {
  // Connect to MongoDB
  await mongoose.connect('mongodb://localhost:27017/myapp');
  console.log('🗄️ Connected to MongoDB');

  const app = express();

  // REST endpoint
  app.get('/api', (_req, res) => {
    res.send('Hello, REST API!');
  });

  // GraphQL endpoint
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  app.use('/graphql', cors(), express.json(), expressMiddleware(server));

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 GraphQL ready at http://localhost:${PORT}/graphql`);
    console.log(`🌐 REST ready at http://localhost:${PORT}/api`);
  });
}

startServer().catch((err) => {
  console.error('Error starting server:', err);
});