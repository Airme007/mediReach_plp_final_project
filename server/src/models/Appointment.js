const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    patientId: { type: String, required: true }, // Clerk user ID
    providerId: { type: String, required: true }, // Clerk user ID
    slot: {
      start: Date,
      end: Date,
    },
    reason: String,
    status: {
      type: String,
      enum: ["scheduled", "cancelled", "completed"],
      default: "scheduled",
    },
    reminders: [
      {
        when: Date,
        sent: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
