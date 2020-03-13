import AppError from '../utils/AppError';
import { Item } from '../model/itemModel';

export const getItems = async (req, res, next) => {
  const items = await Item.find({ userBelongTo: req.user.id }).sort('-_id');
  res.status(200).json({
    status: 'success',
    result: items.lenth,
    data: { items },
  });
  return false;
};

export const createItems = async (req, res, next) => {
  const item = await Item.create({ ...req.body, userBelongTo: req.user.id });
  if (!item) {
    return next(new AppError('items not found', 404));
  }
  res.status(201).json({
    status: 'success',
    data: { item },
  });
};

export const deleteItem = async (req, res, next) => {
  let doc;
  if (req.body.userBelongTo === req.user._id.toString()) {
    doc = await Item.findOneAndDelete(req.body);
  }
  if (!doc) {
    return next(new AppError('No document found', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

export const updateItem = async (req, res, next) => {
  console.log(req.body);
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
