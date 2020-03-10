import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, 'Task must have a heading'],
    },
    detail: String,
    userBelongTo: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true, collection: 'Items' },
);

export const Item = mongoose.model('Items', itemSchema);
