const { model, Schema, default: mongoose } = require("mongoose");

const appointmentSchema = new Schema(
    {
        userIdentification: {
            type: String,
            ref: "user",
            required: true,
            trim: true,
        },
        monthDay: {
            type: String,
            required: true,
            trim: true,
        },
        weekDay: {
            type: String,
            required: true,
            trim: true,
        },
        month: {
            type: String,
            required: true,
            trim: true,
        },
        hour: {
            type: String,
            required: true,
            trim: true,
        },
        typeTherapy: {
            type: String,
        },
        receivedTherapyBefore: {
            type: Boolean,
        },
        expectedPaymentMethod: {
            type: String,
        },
        reasonForConsultation: {
            type: String,
        },
        status: {
            type: String,
            default: "pending",
        },
    },

    { timestamps: true, versionKey: false }
);

const Appointment = model("appointment", appointmentSchema);
module.exports = Appointment;
