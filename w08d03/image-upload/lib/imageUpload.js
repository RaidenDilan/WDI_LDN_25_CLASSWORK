const s3 = require('./s3');
const uuid = require('uuid'); // creates a random file name

function imageUpload(req, res, next) {
  if(!req.body.base64) return next(); // if there is no peace of string, move on.

  // grab everything between base64, & $/
  const base64Data = req.body.base64.match(/base64,(.*)$/)[1];
  const mimeType = req.body.base64.match(/^data:(.*);/)[1];

  const extension = mimeType.replace('image/', '');
  const filename = `${uuid.v4()}.${extension}`;

  s3.upload({
    Key: filename,
    Body: new Buffer(base64Data, 'base64'),
    ContentType: mimeType
  }, (err) => {
    if(err) return next(err);

    req.file = { filename, mimeType };

    next();
  });

}

module.exports = imageUpload;
