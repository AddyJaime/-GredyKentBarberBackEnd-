// here we create the route for the

import express from "express";
import {
  getAllReservation,
  createRervation,
} from "../controllers/reservationController.js";

const router = express.Router();

router.get("reservations", getAllReservation);
router.post("reservations", createRervation);

export default router;
