import express from 'express';

import * as authController from '../controller/authController';
import { validation } from '../middleware/user.validation';
import userSchema from '../model/userValidation';

const route = express.Router();

route
  .route('/login')
  .post(validation(userSchema, 'body'), authController.login);

export default route;
