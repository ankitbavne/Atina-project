exports.successResponse = (res, data, code = 200, message = "success") => {
    return res.status(code).json({
        statusCode: code,
        message: message,
        data: data
    })
}

exports.errorResponse = (res, error) => {
    return res.status(500).json({
        statusCode: 500,
        message: error.message ? error.message : "Something went wrong!",
    })
}