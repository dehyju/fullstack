import express, { Express, Request, Response , Application } from 'express';
import UserRouter from './routers/UserRouter';
import dotenv from 'dotenv';
import connectDB from './db/connection';

//For env File 
dotenv.config();

// Connect to MongoDB
connectDB();

const app: Application = express();
const port = process.env.PORT || 8000;
// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.use("/users", UserRouter)

app.listen(port, () => {
  console.log(`Server is Fire at https://localhost:${port}`);
});