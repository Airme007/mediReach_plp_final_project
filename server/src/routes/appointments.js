const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");
const clerkAuth = require("../middleware/clerkAuth");

// Book an appointment
router.post("/book", clerkAuth, async (req, res) => {
  try {
    const { providerId, slot, reason } = req.body;
    const patientId = req.auth.userId;

    const appointment = await Appointment.create({
      patientId,
      providerId,
      slot,
      reason,
    });

    res.status(201).json({ message: "Appointment booked", appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get patient appointments
router.get("/my", clerkAuth, async (req, res) => {
  try {
    const appointments = await Appointment.find({ patientId: req.auth.userId });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
