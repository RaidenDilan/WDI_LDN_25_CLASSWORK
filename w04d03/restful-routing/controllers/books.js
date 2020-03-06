const Book = require('../models/book');

// INDEX
function indexRoute(req, res) {
  Book
  .find()
  .exec()
  .then((books) => {
    res.render('books/index', { books });
  })
    .catch((err) => {
      res.status(500).end(err);
    });
}

// CREATE
function createRoute(req, res) {
  Book
    .create(req.body)
    .then(() => {
      res.redirect('/books');
    })
    .catch((err) => {
      res.status(500).end(err);
    });
}

// NEW
function newRoute(req, res) {
  res.render('books/new');
}

// SHOW
function showRoute(req, res) {
  Book
  .findById(req.params.id)
  .exec()
  .then((book) => {
    if (!book) return res.status(404).end('Not found');
    res.render('books/show', { book });
  })
  .catch((err) => {
    res.status(500).end(err);
  });
}

// EDIT
function editRoute(req, res) {
  Book
  .findById(req.params.id)
  .exec()
  .then((book) => {
    if (!book) return res.status(404).end('Not found');
    res.render('books/edit', { book });
  })
  .catch((err) => {
    res.status(500).end(err);
  });
}

// UPDATE
function updateRoute(req, res) {
  Book
  .findById(req.params.id)
  .exec()
  .then((book) => {
    if (!book) return res.status(404).send('Not found');
    // loops through that object for each field
    for(const field in req.body) {
      book[field] = req.body[field];
    }
    return book.save();
  })
  .then((book) => {
    res.redirect(`/books/${ book.id }`);
  })
  .catch((err) => {
    res.status(500).end(err);
  });
}

// DELETE
function deleteRoute(req, res) {
  Book
  .findById(req.params.id)
  .exec()
  .then((book) => {
    if (!book) return res.status(404).send('Not found');
    return book.remove();
  })
  .then(() => {
    res.redirect('/books');
  })
  .catch((err) => {
    res.status(500).end(err);
  });
}

// EXPORTS
module.exports = {
  index: indexRoute,
  create: createRoute,
  new: newRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
