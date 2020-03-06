const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: { type: String, required: true }
});

// PASSWORD CONFIRMATION
userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

// PASSWORD VALIDATION
userSchema.pre('validate', function checkPasswordsMatch(next) {
  if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

// PASSWORD MODIFICATION
userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

// INSTANCE METHOD => COMPARES THE PASSWORD AND PASSWORD CONFIRMATION WHETHER IT WILL BE TRUE OR FALASE, TRUE MEANS COOL, SUCCESS!
userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
