const express = require('express');

const itemController = require('../controller/itemController');

const route = express.Router();

route
  .route('/')
  .get(itemController.getItems)
  .post(itemController.createItems)
  .patch(itemController.updateItem)
  .delete(itemController.deleteItem);

module.exports = route;
