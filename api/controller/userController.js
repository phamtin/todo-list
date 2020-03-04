const AppError = require("../utils/AppError");
const User = require("../model/userModel");

exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new AppError("user not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: { user }
  });
};
