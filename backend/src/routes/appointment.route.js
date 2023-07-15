const { AppointmetController } = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/create", AppointmetController.createAppointment);

module.exports = router;
