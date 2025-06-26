import { gql } from 'graphql-tag';
import { User, IUser } from './models/User';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  input CreateUserInput {
    name: String!
    email: String!
    age: Int
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
  }
`;

export const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (_: any, { id }: { id: string }) => await User.findById(id),
  },

  Mutation: {
    createUser: async (_: any, { input }: { input: { name: string; email: string; age?: number } }) => {
      const user = new User(input);
      return await user.save();
    },
  },
};