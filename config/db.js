import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    //  if connection failed then stopped the process
    process.exit(1);
  }
};

export default connectDB;
