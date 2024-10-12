import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

// connect database
connectDB();

// Config express
const app = express();

app.get("/home", (req, res) => {
  res.send("Welcome to my app");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
