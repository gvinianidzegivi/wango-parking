const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  parking_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Parking",
    required: true,
  },
  start_time: {
    type: Date,
    required: true,
  },
  end_time: Date,
  calculation_price: Number,
});

module.exports = mongoose.model("Session", sessionSchema);
