function customError( message, name, statusCode ) {
    const error = new Error()
    error.message = message;
    error.name = name;
    error.statusCode = statusCode ;

    return error
}

try{
    throw customError("user email is not valid","validationError",5005)
}catch(err){
    console.log(err.message)
}