import express from 'express';

import * as authController from '../controller/authController';
import * as itemController from '../controller/itemController';

const route = express.Router();

route
  .route('/')
  .get(authController.checkUser, itemController.getItems)
  .post(authController.checkUser, itemController.createItems)
  .patch(itemController.updateItem)
  .delete(authController.checkUser, itemController.deleteItem);

export default route;
