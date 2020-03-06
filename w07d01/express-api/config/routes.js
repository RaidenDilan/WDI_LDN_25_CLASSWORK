const router = require('express').Router();
const donuts = require('../controllers/donuts');

router.route('/donuts')
  .get(donuts.index)
  .post(donuts.create);

router.route('/donuts/:id')
  .get(donuts.show)
  .put(donuts.update)
  .delete(donuts.delete);

router.all('*', (req, res) => res.notFound());

module.exports = router;
