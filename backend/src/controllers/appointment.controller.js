const { AppointmentService } = require("../services");
const { handleError, handleSucces } = require("../utils/handle");

exports.createAppointment = async (req, res) => {
    try {
        const { body } = req;
        const appointment = await AppointmentService.createAppointment(body);
        return handleSucces(res, appointment, "Cita creada correctamente");
    } catch (error) {
        return handleError(res, error);
    }
};
