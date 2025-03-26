// export const handleError = (err, req, res, next) => {
//   if (err) {
//     return res.status(err.status || 500).json({
//       success: false,
//       message: err.message || "Internal Server Error",
//     });
//   }

//   next();
// };

const handleError = (err, req, res, next) => {
  if (err) {
    return res.status(err.status || 500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }

  next();
};

module.exports = handleError;
