const { AppointmentService } = require("../services");
const { handleError, handleSucces, handleNotFound, handleConflict } = require("../utils/handle");

exports.createAppointment = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    try {
        const { body } = req;
        const appointment = await AppointmentService.createAppointment(body);
        return handleSucces(res, appointment, "Cita creada correctamente");
    } catch (error) {
        return handleError(res, error);
    }
};

exports.consultAppointmentsForIdentification = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        const identification = req.params.identification;
        const appointment = await AppointmentService.consultAppointmentsForIdentification(identification);
        return handleSucces(res, appointment, "Consulta exitosa:");
    } catch (error) {
        // console.log(error);
        handleNotFound(res, "Usted no tiene citas pendientes");
    }
};

exports.deteleAppointmentForId = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    try {
        const appointmentId = req.params.id;
        const appointment = await AppointmentService.deteleAppointmentForId(appointmentId);
        return handleSucces(res, appointment, "Cita eliminada correctamente");
    } catch (error) {
        handleError(res, error);
    }
};

exports.checkAppointmentAvailability = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    try {
        const { body } = req;
        const appointmentDate = await AppointmentService.checkAppointmentAvailability(body);
        return handleSucces(res, appointmentDate, "Horario disponible");
    } catch (error) {
        console.log(error);
        handleConflict(res, "Horario no disponible: Por favor, elija otro horario");
        // handleError(res, error);
    }
};

exports.getAppointmentForId = async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
        const appointmentId = req.params.id;
        const appointment = await AppointmentService.getAppointmentForId(appointmentId);
        return handleSucces(res, appointment, "Cita encontrada");
    } catch (error) {
        console.log(error);
        handleNotFound(res, "No hay ninguna cita con ese ID");
    }
};
