const { AppointmentModel } = require("../models");

exports.createAppointment = async (appointmentBody) => {
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
    return appointmentCreated;
};
