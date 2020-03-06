const router = require('express').Router();
const chocolates = require('../controllers/chocolates');

router.get('/', (req, res) => res.render('index'));

router.route('/chocolates')
  .get(chocolates.index)
  .post(chocolates.create);

router.route('/chocolates/new')
  .get(chocolates.new);

router.route('/chocolates/:id')
  .get(chocolates.show)
  .post(chocolates.update)
  .delete(chocolates.delete);

router.route('/chocolates/:id/edit')
  .get(chocolates.edit);

module.exports = router;
