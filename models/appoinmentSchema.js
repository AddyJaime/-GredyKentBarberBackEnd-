import mongoose from "mongoose";

const AppoinmentSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    require: true,
  },
  service: { type: String, default: "Haircut", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  notes: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("appoinment", AppoinmentSchema);
