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
        const appointment = await AppointmentService.consultAppointmentsForIdentification(identification);
        return handleSucces(res, appointment, "Consulta exitosa:");
    } catch (error) {
        handleError(res, error);
    }
};

exports.deteleAppointmentForId = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const appointment = await AppointmentService.deteleAppointmentForId(appointmentId);
        return handleSucces(res, appointment, "Cita eliminada existosamente");
    } catch (error) {
        handleError(res, error);
    }
};

exports.checkAppointmentAvailability = async (req, res) => {
    try {
        const { body } = req;
        const appointmentDate = await AppointmentService.checkAppointmentAvailability(body);
        return handleSucces(res, appointmentDate, "Horario disponible");
    } catch (error) {
        handleError(res, error);
    }
};
