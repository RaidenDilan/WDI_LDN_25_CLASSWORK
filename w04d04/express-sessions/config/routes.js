const router = require('express').Router();
const staticController = require('../controllers/static');
const sessionsController = require('../controllers/sessions');
const registrationsController = require('../controllers/registrations');
const filmsController = require('../controllers/films');

// SECURITY ROUTE
function secureRoute(req, res, next) {
  if(!req.session.isAuthenticated || !req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in.');
      res.redirect('/');
    });
  }

  next();
}

router.get('/', (req, res) => res.render('static/index'));

router.route('/films')
  .get(filmsController.index)
  .post(secureRoute, filmsController.create);

router.route('/films/new')
  .get(secureRoute, filmsController.new);

router.route('/films/:id')
  .get(filmsController.show)
  .put(secureRoute, filmsController.update)
  .delete(secureRoute, filmsController.delete);

router.route('/films/:id/edit')
  .get(secureRoute, filmsController.edit);

router.route('/register')
  .get(registrationsController.new)
  .post(registrationsController.create);

router.route('/login')
  .get(sessionsController.new)
  .post(sessionsController.create);

router.route('/logout')
  .get(sessionsController.delete);

module.exports = router;
