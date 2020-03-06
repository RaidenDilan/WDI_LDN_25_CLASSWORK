const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const s3 = require('../lib/s3');

const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  image: { type: String },
  password: { type: String, required: true }
});

userSchema
.virtual('imageSRC')
.get(function getImageSRC() {
  if(!this.image) return null; // could put a placeholder image here.
  return `https://s3-eu-west-1.amazonaws.com/wdi-ldn/${this.image}`;
});

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

// lifecycle hook - mongoose middleware
userSchema.pre('validate', function checkPassword(next) {
  if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
  next();
});

userSchema.pre('save', function checkPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

// delete an image after the user deletes thier profile to get rid of the image on amazon s3 db.
userSchema.pre('remove', function removeImage(next) {
  s3.deleteObject({ Key: this.image }, next);
});

module.exports = mongoose.model('User', userSchema);
