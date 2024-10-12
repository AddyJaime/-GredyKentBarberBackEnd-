import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, requiret: true },
  phone: { type: String, require: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("customer", CustomerSchema);
