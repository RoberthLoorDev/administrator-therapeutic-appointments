exports.handleSucces = (res, data, message) => {
    return res.status(200).json({
        error: false,
        data,
        status: 200,
        message,
    });
};

exports.handleError = (res, e) => {
    const { message } = e;
    return res.status(500).json({
        error: true,
        data: null,
        status: 500,
        message,
    });
};

exports.handleNotFound = (res, message) => {
    return res.status(404).json({
        error: true,
        data: null,
        status: 404,
        message,
    });
};

exports.handleConflict = (res, message) => {
    return res.status(409).json({
        error: true,
        data: null,
        status: 409,
        message,
    });
};
