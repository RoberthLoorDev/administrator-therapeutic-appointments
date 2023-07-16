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

    if (!appointment || appointment.length == 0)
        throw new Error("No existen citas con esa cedula");

    const userData = await UserService.consultUserForIdentification(userId);

    return { appointment, userData };
};
