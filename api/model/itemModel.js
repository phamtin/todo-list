const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, 'Task must have a heading']
    },
    detail: String,
    userBelongTo: {
      type: mongoose.Schema.ObjectId
    }
  },
  { collection: 'Items' }
);

const Item = mongoose.model('Items', itemSchema);

module.exports = Item;
