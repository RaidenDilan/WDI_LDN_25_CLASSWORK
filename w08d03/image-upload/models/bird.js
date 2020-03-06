const mongoose = require('mongoose');
const s3 = require('../lib/s3');

const birdSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  latinName: { type: String, required: true, unique: true },
  family: { type: String, required: true },
  image: { type: String, required: true }
});

birdSchema
  .path('image')
  .set(function getPreviousImage(image) {
    this._image = this.image;
    return image;
  });

birdSchema
  .virtual('imageSRC')
  .get(function getImageSRC() {
    if(!this.image) return null;
    return `http://s3-eu-west-1.amazonaws.com/wdi-ldn/${this.image}`;
  });

birdSchema.pre('save', function CheckPreviousImage(next) {
  if(this.isModified('image') && this._image) {
    return s3.deleteObject({ Key: this._image}, next);
  }
  next();
});

birdSchema.pre('remove', function deleteImage(next) {
  if(this.image) return s3.deleteObject({ Key: this.image }, next);

  next();
});

module.exports = mongoose.model('Bird', birdSchema);
