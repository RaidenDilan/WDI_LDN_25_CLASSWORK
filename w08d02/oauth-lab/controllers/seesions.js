const oauth = require('../config/oauth');

function sessionsNew(req, res) {
  res.render('sessions/new', { oauth });
}

module.exports = {
  new: sessionsNew
};
