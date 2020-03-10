import AppError from '../utils/AppError';
import User from '../model/userModel';

export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(new AppError('user not found', 404));
  }
  res.status(200).json({
    status: 'success',
    data: { user },
  });
};
