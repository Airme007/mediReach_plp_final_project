const express = require("express");
const router = express.Router();
const ProviderAvailability = require("../models/providerAvailability");
const clerkAuth = require("../middleware/clerkAuth");

// Provider sets availability
router.post("/availability", clerkAuth, async (req, res) => {
  try {
    const providerId = req.auth.userId;
    const { date, slots } = req.body;

    const availability = await ProviderAvailability.create({
      providerId,
      date,
      slots,
    });

    res.status(201).json({ message: "Availability set", availability });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all providers’ available slots
router.get("/availability", async (req, res) => {
  try {
    const availabilities = await ProviderAvailability.find();
    res.json(availabilities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
