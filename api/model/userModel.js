const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'required'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'provide correct email'],
    },
    password: {
      type: String,
      required: [true, 'password is empty'],
      minlength: 6,
    },
  },
  { collection: 'User' },
);

userSchema.methods.correctPassword = function(candidatePassword, userPassword) {
  return candidatePassword === userPassword;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
