const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const User = require("../model/userModel");

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    return next(new AppError("Wrong password, Plz try again", 401));
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
  res.status(200).json({
    status: "success",
    token
  });
};
