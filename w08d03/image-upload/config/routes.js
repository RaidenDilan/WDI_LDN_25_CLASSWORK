const router = require('express').Router();
const birds = require('../controllers/birds');
const imageUpload = require('../lib/imageUpload');

router.route('/birds')
  .get(birds.index)
  .post(imageUpload, birds.create);

router.route('/birds/:id')
  .get(birds.show)
  .put(imageUpload, birds.update)
  .delete(birds.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
