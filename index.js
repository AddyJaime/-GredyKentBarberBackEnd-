import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

// from controllers we are going to import the logic
import {
  getAllReservation,
  createRervation,
} from "./controllers/reservationController.js";

// Load environment variables from .env
dotenv.config();

// connect database
connectDB();

// Config express
const app = express();

// cors acceptoing req from front end
app.use(cors({ origin: "*" }));

// middleware for accepting json
app.use(express.json());

app.get("/api/reservations", getAllReservation);
app.post("/api/reservations", createRervation);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
