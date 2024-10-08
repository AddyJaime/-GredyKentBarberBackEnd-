import express from "express";
import connectDB from "./config/db";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

// connect database
connectDB();

const PORT = process.env.PORT;

application.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
