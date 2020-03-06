const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');
const hotels = require('../controllers/hotels');

router.get('/', (req, res) => res.render('statics/index'));

router.route('/hotels')
  .get(hotels.index)
  .post(secureRoute, hotels.create);

router.route('/hotels/new')
  .get(secureRoute, hotels.new);

router.route('/hotels/:id')
  .get(hotels.show)
  .put(secureRoute, hotels.update)
  .delete(secureRoute, hotels.delete);

router.route('/hotels/:id/edit')
  .get(secureRoute, hotels.edit);

router.route('/hotels/:id/comments')
  .post(secureRoute, hotels.createComment);

router.route('/hotels/:id/comments/:commentId')
  .delete(secureRoute, hotels.deleteComment);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.all('*', (req, res) => res.notFound());

module.exports = router;
