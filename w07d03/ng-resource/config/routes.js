const router = require('express').Router();
const birds = require('../controllers/birds');

router.route('/birds')
  .get(birds.index)
  .post(birds.create);

router.route('/birds/:id')
  .get(birds.show)
  .put(birds.update)
  .delete(birds.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;