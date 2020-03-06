const User = require('../models/user');

function newRoute(req, res) {
  res.render('sessions/new');
}

function createRoute(req, res) {
  User
  .findOne({ email: req.body.email })
  .then((user) => {
    if(!user || !user.validatePassword(req.body.password)) {
      res.status(401).render('sessions/new', { message: 'Unrecognised credentials' });
    }
// REDIRECT TO HOMEPAGE IF USER CREDENTIALS IS SUCCESSFUL
    res.redirect('/');
  });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
