const User = require("../models/User");

exports.registerUser = async (req, res) => {
  const { email, full_name, address, car_plate } = req.body;
  try {
    const user = new User({ email, full_name, address, car_plate });
    await user.save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error registering user", error: err.message });
  }
};
exports.loginUser = async (req, res) => {
  const { email, car_plate } = req.body;
  try {
    const user = new User.findOne({ email, full_name, address, car_plate });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json;
  }
};
