import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  service: { type: String, default: "Haircut" },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  note: { type: String, required: true },
  status: { type: String, default: "Pending" },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
