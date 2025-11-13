const mongoose = require("mongoose");

const providerAvailabilitySchema = new mongoose.Schema(
  {
    providerId: { type: String, required: true }, // Clerk user ID
    date: { type: Date, required: true },
    slots: [
      {
        start: Date,
        end: Date,
        isBooked: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProviderAvailability", providerAvailabilitySchema);
