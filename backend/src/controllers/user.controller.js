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

exports.consultUserForIdentification = async (req, res) => {
    try {
        const identification = req.params.identification;
        const user = await UserService.consultUserForIdentification(identification);

        return handleSucces(res, user, "Usuario consultado exitosamente");
    } catch (error) {
        handleError(res, error);
    }
};
