const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema({
  from: String,
  to: String,
  rate_per_hour: Number,
});

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  pricing_rules: [pricingSchema],
});

module.exports = mongoose.model("City", citySchema);
