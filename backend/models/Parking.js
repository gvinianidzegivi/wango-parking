const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city_id: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
});

module.exports = mongoose.model("Parking", parkingSchema);
