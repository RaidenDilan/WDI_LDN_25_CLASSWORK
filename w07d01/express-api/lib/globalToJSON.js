function globalToJSON(schema) {
  schema.set('toJSON', {
    virtuals: true,
    // transfrom objects and json
    // delete the _id AND __v
    transform(obj, json) {
      delete json._id;
      delete json.__v;
    }
  });
}

module.exports = globalToJSON;
