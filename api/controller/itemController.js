const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const AppError = require('../utils/AppError');
const Item = require('../model/itemModel');

exports.getItems = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError('Log in to access.', 401));
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const items = await Item.find({ userBelongTo: decoded.id });
  res.status(200).json({
    status: 'success',
    result: items.lenth,
    data: { items },
  });
  return false;
};

exports.createItems = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError('Log in to access.', 401));
  }
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  const item = await Item.create({ ...req.body, userBelongTo: decoded.id });
  if (!item) {
    return next(new AppError('items not found', 404));
  }
  res.status(201).json({
    status: 'success',
    data: { item },
  });
};

exports.deleteItem = async (req, res, next) => {
  const doc = await Item.findOneAndDelete(req.body._id);
  if (!doc) {
    return next(new AppError('No document found', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
  return false;
};

exports.updateItem = async (req, res, next) => {
  const doc = await Item.findByIdAndUpdate(req.body.idItem, req.body.data, {
    new: true,
    runValidators: true,
  });

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  console.log(doc);
  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
};
