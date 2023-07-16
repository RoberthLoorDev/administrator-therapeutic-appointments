const { UserModel } = require("../models/index");

exports.createUser = async (userBody) => {
    const existingUser = await UserModel.findOne({
        identification: userBody.identification,
    });

    if (existingUser) {
        const userToUpdate = UserModel.findOneAndUpdate(
            {
                identification: userBody.identification,
            },
            {
                $set: {
                    names: userBody.names,
                    lastnames: userBody.lastnames,
                    email: userBody.email,
                    gender: userBody.gender,
                    age: userBody.age,
                },
            }
        );

        return userToUpdate;
    } else {
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
    }
};

exports.consultUserForIdentification = async (identification) => {
    const user = await UserModel.findOne({
        identification: identification,
    });

    if (!user) throw new Error("Usuario no encontrado");

    return user;
};
