const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, 'Task must have a heading'],
    },
    detail: String,
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    userBelongTo: {
      type: mongoose.Schema.ObjectId,
    },
  },
  { collection: 'Items' },
);

export const Item = mongoose.model('Items', itemSchema);
