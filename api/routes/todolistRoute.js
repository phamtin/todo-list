const express = require('express');

const authController = require('../controller/authController');
const itemController = require('../controller/itemController');

const route = express.Router();

route
  .route('/')
  .get(authController.checkUser, itemController.getItems)
  .post(authController.checkUser, itemController.createItems)
  .patch(itemController.updateItem)
  .delete(itemController.deleteItem);

module.exports = route;
