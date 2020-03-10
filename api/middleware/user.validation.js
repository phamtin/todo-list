import AppError from '../utils/AppError';

export const validation = (schema, prop) => (req, res, next) => {
  const { value, error } = schema.validate(req[prop]);
  if (error) {
    return next(new AppError('invalid email or password', 401));
  }
  req.dataUser = { value };
  next();
};
