const { AppointmentModel, UserModel } = require("../models");
const { UserService } = require("./index");

exports.createAppointment = async (appointmentBody) => {
    //user data extraction
    const userBody = {
        names: appointmentBody.names,
        lastnames: appointmentBody.lastnames,
        identification: appointmentBody.identification,
        age: appointmentBody.age,
        email: appointmentBody.email,
        gender: appointmentBody.gender,
    };
    const userCreation = await UserService.createUser(userBody);

    const newAppointment = new AppointmentModel({
        userIdentification: appointmentBody.userIdentification,
        monthDay: appointmentBody.monthDay,
        weekDay: appointmentBody.weekDay,
        month: appointmentBody.month,
        hour: appointmentBody.hour,
        typeTherapy: appointmentBody.typeTherapy,
        receivedTherapyBefore: appointmentBody.receivedTherapyBefore,
        expectedPaymentMethod: appointmentBody.expectedPaymentMethod,
        reasonForConsultation: appointmentBody.reasonForConsultation,
    });

    const appointmentCreated = await newAppointment.save();
    return { appointmentCreated, userCreation };
};

exports.consultAppointmentsForIdentification = async (userId) => {
    const appointment = await AppointmentModel.findOne({
        userIdentification: userId,
        status: "pending",
    });

    if (!appointment || appointment.length == 0) throw new Error("No existen citas con esa cedula");

    const userData = await UserService.consultUserForIdentification(userId);

    return { appointment, userData };
};

exports.deteleAppointmentForId = async (appointmentId) => {
    const appointmentEliminated = AppointmentModel.findOneAndDelete({
        _id: appointmentId,
    });

    if (!appointmentEliminated) throw new Error("No existe cita con ese ID");

    return appointmentEliminated;
};

//verification appointment date
exports.checkAppointmentAvailability = async (appointmentDate) => {
    const appointment = await AppointmentModel.findOne({
        month: appointmentDate.month,
        monthDay: appointmentDate.monthDay,
        weekDay: appointmentDate.weekDay,
        hour: appointmentDate.hour,
    });

    if (appointment) throw new Error("Horario no disponible: Por favor, elija otro horario");

    return appointment;
};
