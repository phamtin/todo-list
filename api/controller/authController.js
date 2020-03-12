import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import User from '../model/userModel';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        error: 'Wrong email or password !',
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    res.status(200).json({
      status: 'success',
      user,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

export const checkUser = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return res.status(401).json({
      error: 'Unauthorized user!',
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const currentUser = await User.findById(decoded.id);
    req.user = currentUser;
  } catch (error) {
    return res.status(401).json({
      error: 'Unauthorized user!',
    });
  }

  next();
};
