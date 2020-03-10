import express from 'express';

import * as authController from '../controller/authController';

const route = express.Router();

route.route('/login').post(authController.login);

export default route;
