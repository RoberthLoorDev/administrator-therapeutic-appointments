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
