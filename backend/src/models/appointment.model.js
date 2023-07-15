const { model, Schema, default: mongoose } = require("mongoose");

const appointmentSchema = new Schema(
    {
        idUser: {
            type: mongoose.Schema.Types.ObjectId,
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
    },

    { timestamps: true, versionKey: false }
);

const Appointment = model("appointment", appointmentSchema);
module.exports = Appointment;
