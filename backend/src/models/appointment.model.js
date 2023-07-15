const { model, Schema, default: mongoose } = require("mongoose");

const appointmentSchema = new Schema(
    {
        idUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            require: true,
            trim: true,
        },
        monthDay: {
            type: String,
            require: true,
            trim: true,
        },
        weekDay: {
            type: String,
            require: true,
            trim: true,
        },
        month: {
            type: String,
            require: true,
            trim: true,
        },
        hour: {
            type: String,
            require: true,
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
