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
        date: appointmentBody.date,
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
    //extract week day from date appointment
    const dateEntered = new Date(appointmentCreated.date);

    //month day
    const day = dateEntered.getDate() + 1;

    //week day
    const weekDaysArray = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const weekDay = weekDaysArray[dateEntered.getDay()];

    //months
    const monthsArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const month = monthsArray[dateEntered.getMonth()];

    //year
    const year = dateEntered.getFullYear();

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
        subject: `CITA CREADA: Fecha: ${weekDay}, ${day} de ${month} del ${year} - Hora: ${appointmentCreated.hour}`,
        text: `Se ha creado una nueva cita para el paciente ${userCreation.names} ${userCreation.lastnames}.
                Fecha: ${weekDay}, ${day} de ${month} del ${year}
                Hora: ${appointmentCreated.hour}
                Tipo de terapia: ${appointmentCreated.typeTherapy}
                Recibió terapia previamente: ${appointmentCreated.receivedTherapyBefore ? "Sí" : "No"}
                Método de pago esperado: ${appointmentCreated.expectedPaymentMethod}
                Motivo de consulta: ${appointmentCreated.reasonForConsultation}`,
        html: `<p>Se ha creado una nueva cita para el paciente ${userCreation.names} ${userCreation.lastnames}.</p>
                <p><strong>Fecha:</strong> ${weekDay}, ${day} de ${month} del ${year}</p>
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
