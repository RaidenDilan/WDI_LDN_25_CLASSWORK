// Loads mongoose
const mongoose = require('mongoose');

// Create a Schematic
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  dob: Date
}, {
  timestamps: true
});

// A instance method
userSchema.methods.fullName = function fullName() {
  return `${this.firstName} ${this.lastName}`;
};

// A Class method
userSchema.statics.all = function all(callback) {
  return this.find({}, callback);
};

// export user schema
module.exports = mongoose.model('User', userSchema);
