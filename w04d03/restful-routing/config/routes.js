const express = require('express');
const router  = express.Router();
const books = require('../controllers/books');

// A home route
router.get('/', (req, res) => res.render('index'));

// RESTful routes for the Book resource
// All URLS should contain /books

// ROUTES // KEEP IN THE RIGHT ORDER
router.route('/books')
  .get(books.index)
  .post(books.create);

router.route('/books/new')
  .get(books.new);

router.route('/books/:id')
  .get(books.show)
  .post(books.update)
  .delete(books.delete);

router.route('/books/:id/edit')
  .get(books.edit);

module.exports = router;
