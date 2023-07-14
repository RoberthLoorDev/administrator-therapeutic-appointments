const { UserModel } = require("../models/index");

exports.createUser = async (userBody) => {
    const existingUser = await UserModel.findOne({
        identification: userBody.identification,
    });

    if (existingUser) {
        throw new Error("El usuario ya existe");
    }

    const newUser = new UserModel({
        names: userBody.names,
        lastnames: userBody.lastnames,
        identification: userBody.identification,
        email: userBody.email,
        gender: userBody.gender,
        age: userBody.age,
    });

    const userCreated = await newUser.save();
    return userCreated;
};
