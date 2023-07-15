const { UserService } = require("../services/index");
const { handleError, handleSucces } = require("../utils/handle");

exports.createUser = async (req, res) => {
    try {
        const { body } = req;
        const user = await UserService.createUser(body);
        return handleSucces(res, user, "Usuario registrado exitosamente");
    } catch (e) {
        return handleError(res, e);
    }
};
