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

exports.consultAppointmentsForIdentification = async (req, res) => {
    try {
        const identification = req.params.identification;
        const appointment =
            await AppointmentService.consultAppointmentsForIdentification(
                identification
            );
        return handleSucces(res, appointment, "Consulta exitosa:");
        
    } catch (error) {
        handleError(res, error);
    }
};
