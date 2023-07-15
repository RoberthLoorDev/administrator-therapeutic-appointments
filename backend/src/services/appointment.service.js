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
        idUser: appointmentBody.idUser,
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
