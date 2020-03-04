const express = require("express");

const itemController = require("../controller/itemController");

const route = express.Router();

route
  .route("/")
  .get(itemController.getItems)
  .post(itemController.createItems);

module.exports = route;
