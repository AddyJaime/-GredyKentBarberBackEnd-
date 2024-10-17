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

const allowedOrigins = [
  "https://gredykent-barber-frontend-d3ku-lzqtd9fps-addy-jaimes-projects.vercel.app",
];

// Config express
const app = express();
// cors acceptoing req from front end
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// middleware for accepting json
app.use(express.json());

app.get("/api/reservations", getAllReservation);
app.post("/api/reservations", createRervation);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
