# Backend Framework

This is the backend for the Fullstack Portfolio and Blog Website. It is built with **Express**, **Apollo Server**, **GraphQL**, and **MongoDB** (via Mongoose).

## Features

- REST and GraphQL API server using Express and Apollo Server
- MongoDB integration for persistent data storage
- User model with Mongoose
- Example GraphQL schema and resolvers for user management

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm
- MongoDB (local or remote instance)

### Installation

1. Clone the repository and navigate to the backend folder:
   ```sh
   git clone <repo-url>
   cd backend
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Set up the environment variables:
   - Create a `.env` file in the root of the backend folder
   - Add your MongoDB connection string:
     ```env
     MONGODB_URI=<your-mongodb-uri>
     ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Access the GraphQL API at `http://localhost:4000/graphql`

## Tutorials

- [BuiltIn](https://builtin.com/articles/build-express-app-typescript)

## Dependencies

- Express v4.18.2
- Apollo Server
- Graphql

