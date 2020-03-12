export const validation = (schema, prop) => (req, res, next) => {
  const { value, error } = schema.validate(req[prop]);
  if (error) {
    return res.status(401).json({
      error: 'Invalid email or password !',
    });
  }
  next();
};
