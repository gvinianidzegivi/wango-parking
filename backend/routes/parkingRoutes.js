const express = require("express");
const router = express.Router();
const {
  startParking,
  stopParking,
  getParkingHistory,
} = require("../controllers/userController.js");

router.post("/start", startParking);

router.post("/stop", stopParking);

router.get("/:email/sessions", getParkingHistory);

module.exports = router;
