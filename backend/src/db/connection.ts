import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
// MongoDB connection URI
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/stephendb";
// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected successfully", mongoURI);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
  } finally {
    // Optional: Close the connection when the process ends
    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB connection closed");
    });
  }
}

export default connectDB;