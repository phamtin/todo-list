const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const AppError = require("../utils/AppError");
const Item = require("../model/itemModel");

exports.getItems = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new AppError("Log in to access.", 401));
  }
  // 2) Verification token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const items = await Item.find({ userBelongTo: decoded.id });
  res.status(200).json({
    status: "success",
    result: items.lenth,
    data: { items }
  });
};

exports.createItems = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new AppError("Log in to access.", 401));
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const item = await Item.create({ ...req.body, userBelongTo: decoded.id });
  // const items = await Item.find({ userBelongTo: decoded.id });
  if (!item) {
    return next(new AppError("items not found", 404));
  }
  res.status(201).json({
    status: "success",
    data: { item }
  });
};
