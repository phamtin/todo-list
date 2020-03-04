// const AppError = require("../utils/appError");

// const sendErrorDev = (res, err) => {
//   res.status(err.statusCode).json({
//     status: err.status,
//     error: err,
//     message: err.message,
//     stack: err.stack
//   });
// };

// const sendErrorProd = (res, err) => {
//   if (err.isOperational) {
//     res.status(err.statusCode).json({
//       status: err.status,
//       message: err.message
//     });
//   } else {
//     res.status(500).json({
//       status: "Error",
//       message: "Something went wrong :("
//     });
//   }
// };

// const handleCastErrorDB = error => {
//   const message = `Invalid ${error.path}: ${error.value}`;
//   return new AppError(message, 401);
// };

// const handleJsonWebTokenError = error => {
//   const { message } = error;
//   return new AppError(message, 401);
// };

// module.exports = (err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || "error";

//   if (process.env.NODE_ENV === "development") {
//     sendErrorDev(res, err);
//   } else if (process.env.NODE_ENV === "production") {
//     let error = { ...err };
//     //If error is not Operational (from DB)
//     if (error.name === "CastError") error = handleCastErrorDB(error);
//     if (error.name === "JsonWebTokenError")
//       error = handleJsonWebTokenError(error);
//     sendErrorProd(res, error);
//   }
// };
