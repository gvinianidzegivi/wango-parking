const Session = require("../models/Session");
const City = require("../models/City");
const User = require("../models/User");
const Parking = require("../models/Parking");

exports.startParking = async (req, res) => {
  const { user_id, parking_area_id } = req.body;
  try {
    const parkingSession = new Session({
      user_id,
      parking_area_id,
      start_time: new Date(),
    });
    await parkingSession.save();
    res
      .status(201)
      .json({ message: "Parking started successfully", parkingSession });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error starting parking", error: err.message });
  }
};
exports.stopParking = async (req, res) => {
  const { user_id } = req.body;
  try {
    const session = await Session.findOne({ user_id, end_time: null });
    if (!session) {
      return res
        .status(404)
        .json({ message: "No active parking session found" });
    }
    session.end_time = new Date();

    const parkingArea = await Parking.findById(session.parking_area_id);
    const city = await City.findById(parkingArea.parking_area_id);

    session.calculation_price = calculatePrice(
      session.start_time,
      session.end_time,
      city.price_per_hour
    );
    await session.save();

    res.json({ message: "Parking stopped successfully", session });
  } catch (err) {
    res.status(500).json({
      message: "Error stopping parking",
      error: err.message,
    });
  }
};

exports.getParkingHistory = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    const sessions = await Session.find({ user_id: user._id });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching parking history",
      error: err.message,
    });
  }
};
