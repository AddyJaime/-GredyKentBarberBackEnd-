// in controllers we import the model, and here we write down the logic for creating a new appoinemt
import Reservation from "../models/reservationSchema.js";

export const getAllReservation = async (req, res) => {
  try {
    const allRervation = await Reservation.find();
    res.status(200).json(allRervation);
  } catch (error) {
    res.status(500).json({ message: "error getting all reservation", error });
  }
};

export const createRervation = async (req, res) => {
  try {
    const { name, service, number, date, time, note, status } = req.body;
    const newReservation = new Reservation({
      name,
      service,
      date,
      time,
      note,
      number,
      status,
    });
    await newReservation.save();
    res
      .status(201)
      .json({ message: "Your appointment has been successfully scheduled" });
  } catch (error) {
    console.log(error, "creating the new reservation");
    res
      .status(500)
      .send({ message: "Error creating the new reservation", error });
  }
};
