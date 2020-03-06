const router = require('express').Router();
const staticsController = require('../controllers/statics');
const filmsController = require('../controllers/films');

router.route('/')
  .get(staticsController.index);

router.route('/films')
  .get(filmsController.index)
  .post(filmsController.create);

router.route('/films/new')
  .get(filmsController.new);

router.route('/films/:id')
  .get(filmsController.show)
  .put(filmsController.update)
  .delete(filmsController.delete);

router.route('/films/:id/edit')
  .get(filmsController.edit);

// catch all 404 error page
router.all('*', (req, res) => res.notFound());

module.exports = router;