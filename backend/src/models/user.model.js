const { model, Schema } = require("mongoose");

const userSchema = new Schema(
    {
        names: {
            type: String,
            require: true,
        },

        lastnames: {
            type: String,
            require: true,
        },

        identification: {
            type: String,
            require: true,
            unique: true,
        },

        email: {
            type: String,
        },

        gender: {
            type: String,
        },

        age: {
            require: true,
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
