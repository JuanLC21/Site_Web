function errorHandler (error, req, res, next) {
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
        return res.status(400).json({"message": 'The JSON body is not valid'})
    }
    res.status(error.statusCode || 500).json({"message": error.message})
}

export default errorHandler