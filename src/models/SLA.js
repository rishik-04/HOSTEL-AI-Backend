const mongoose = require("mongoose");

const slaSchema = new mongoose.Schema(
  {
    complaintId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Complaint",
      required: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true,
    },

    timeLimit: {
      type: Number,
      required: true,
    },

    deadline: {
      type: Date,
      required: true,
    },

    breached: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SLA", slaSchema);