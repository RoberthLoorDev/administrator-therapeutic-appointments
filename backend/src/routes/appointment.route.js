const { AppointmetController } = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/create", AppointmetController.createAppointment);
router.get('/consult/:identification', AppointmetController.consultAppointmentsForIdentification)
router.get('/delete/:id', AppointmetController.deteleAppointmentForId)
router.get('/check/appointment', AppointmetController.checkAppointmentAvailability)

module.exports = router;
