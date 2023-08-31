const { AppointmetController } = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/create", AppointmetController.createAppointment);
router.get('/consult/:identification', AppointmetController.consultAppointmentsForIdentification)
router.get('/delete/:id', AppointmetController.deteleAppointmentForId)
router.post('/check/', AppointmetController.checkAppointmentAvailability)
router.get('/:id', AppointmetController.getAppointmentForId)

module.exports = router;
