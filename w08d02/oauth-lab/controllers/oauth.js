const rp = require('request-promise');
const config = require('../config/auth');
// const User = require('.../models/user');

function github(req, res, next) {
  return rp({
    method: 'POST',
    url: config.github.accessTokenURL,
    qs: {
      client_id: config.github.clientId,
      client_secret: config.github.clientSecret,
      code: req.body.code
    },
    json: true
  })
  .then((token) => {
    return rp({
      method: 'GET',
      url: config.github.profileURL,
      qs: token,
      json: true
    });
  })
  .then((profile) => {
    console.log(profile);
    res.send();
  })
  .catch(next);
}

module.exports = {
  github
};
