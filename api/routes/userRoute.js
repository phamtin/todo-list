const express = require("express");

const authController = require("../controller/authController");
const userController = require("../controller/userController");

const route = express.Router();

// route.route("/:idUser").get(userController.getUser);

route.route("/login").post(authController.login);

module.exports = route;
