import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    hello: String!
    add(x: Int!, y: Int!): Int!
  }
`;

export const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    add: (_: any, args: { x: number; y: number }) => args.x + args.y,
  },
};
