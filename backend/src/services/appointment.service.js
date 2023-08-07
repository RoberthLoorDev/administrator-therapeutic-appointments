const nodemailer = require("nodemailer");
const { AppointmentModel, UserModel } = require("../models");
const { UserService } = require("./index");
const { Config } = require("../../config/index");

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

    //send mail
    if ((appointmentCreated, userCreation)) sendMailToAdmin(appointmentCreated, userCreation);

    return { appointmentCreated, userCreation };
};

exports.consultAppointmentsForIdentification = async (userId) => {
    const appointment = await AppointmentModel.findOne({
        userIdentification: userId,
        status: "pending",
    });

    if (!appointment || appointment.length == 0) throw new Error("Usted no tiene citas pendientes");

    const userData = await UserService.consultUserForIdentification(userId);

    return { appointment, userData };
};

exports.deteleAppointmentForId = async (appointmentId) => {
    const appointmentEliminated = await AppointmentModel.findOneAndDelete({
        _id: appointmentId,
    });

    if (!appointmentEliminated) throw new Error("No existe cita con ese ID");

    return appointmentEliminated;
};

//verification appointment date
exports.checkAppointmentAvailability = async (appointmentDate) => {
    const appointments = await AppointmentModel.find({
        month: appointmentDate.month,
        monthDay: appointmentDate.monthDay,
    });

    const hoursNotAvaliables = appointments.map((appointment) => appointment.hour.split(" "));

    return hoursNotAvaliables;
};

const sendMailToAdmin = async (appointmentCreated, userCreation) => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: Config.GmailUser,
            pass: Config.GmailPassword,
        },
    });

    const mailOptions = {
        from: Config.GmailUser,
        to: Config.GmailReciver,
        subject: `CITA CREADA: Fecha: ${appointmentCreated.monthDay} (${appointmentCreated.weekDay}), ${appointmentCreated.month} - Hora: ${appointmentCreated.hour}`,
        text: `Se ha creado una nueva cita para el paciente ${userCreation.names} ${userCreation.lastnames}.
                Fecha: ${appointmentCreated.monthDay} (${appointmentCreated.weekDay}), ${appointmentCreated.month}
                Hora: ${appointmentCreated.hour}
                Tipo de terapia: ${appointmentCreated.typeTherapy}
                Recibió terapia previamente: ${appointmentCreated.receivedTherapyBefore ? "Sí" : "No"}
                Método de pago esperado: ${appointmentCreated.expectedPaymentMethod}
                Motivo de consulta: ${appointmentCreated.reasonForConsultation}`,
        html: `<p>Se ha creado una nueva cita para el paciente ${userCreation.names} ${userCreation.lastnames}.</p>
                <p><strong>Fecha:</strong> ${appointmentCreated.monthDay} (${appointmentCreated.weekDay}), ${appointmentCreated.month}</p>
                <p><strong>Hora:</strong> ${appointmentCreated.hour}</p>
                <p><strong>Tipo de terapia:</strong> ${appointmentCreated.typeTherapy}</p>
                <p><strong>Recibió terapia previamente:</strong> ${appointmentCreated.receivedTherapyBefore ? "Sí" : "No"}</p>
                <p><strong>Método de pago esperado:</strong> ${appointmentCreated.expectedPaymentMethod}</p>
                <p><strong>Motivo de consulta:</strong> ${appointmentCreated.reasonForConsultation}</p>`,
    };

    try {
        //send mail
        const info = await transporter.sendMail(mailOptions);
        console.log("Correo enviado correctamente", info);
    } catch (error) {
        console.log(error);
    }
};
