const Appointment = require('../models/Appointment');

const createAppointment = async (req, res) => {
  const { date, description } = req.body;
  const userId = req.user.id;  // Assuming the user is authenticated (we'll use JWT)

  const appointment = new Appointment({ userId, date, description });
  await appointment.save();

  res.status(201).json({ appointment });
};

const getAppointments = async (req, res) => {
  const appointments = await Appointment.find({ userId: req.user.id });
  res.status(200).json(appointments);
};

module.exports = { createAppointment, getAppointments };
