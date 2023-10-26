const { model, Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema(
    {
        names: {
            type: String,
            required: true,
        },

        lastnames: {
            type: String,
        },

        identification: {
            type: String,
            required: true,
            unique: true,
        },

        phone: {
            type: String,
            required: true,
        },

        email: {
            type: String,
        },

        gender: {
            type: String,
        },

        age: {
            required: true,
            type: Number,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const User = model("user", userSchema);
module.exports = User;
