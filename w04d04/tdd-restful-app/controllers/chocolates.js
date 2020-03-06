const Chocolate = require('../models/chocolate');

// INDEX
function indexRoute(req, res) {
  Chocolate
  .find()
  .exec()
  .then((chocolates) => {
    res.render('chocolates/index', { chocolates });
  })
    .catch((err) => {
      res.status(500).end(err);
    });
}

// NEW
function newRoute(req, res) {
  res.render('chocolates/new');
}

// CREATE
function createRoute(req, res) {
  Chocolate
    .create(req.body)
    .then(() => {
      res.redirect('/chocolates');
    })
    .catch((err) => {
      res.status(500).end(err);
    });
}

// SHOW
function showRoute(req, res) {
  Chocolate
  .findById(req.params.id)
  .exec()
  .then((chocolate) => {
    if (!chocolate) return res.status(404).end('Not found');
    res.render('chocolates/show', { chocolate });
  })
  .catch((err) => {
    res.status(500).end(err);
  });
}

// EDIT
function editRoute(req, res) {
  Chocolate
  .findById(req.params.id)
  .exec()
  .then((chocolate) => {
    if (!chocolate) return res.status(404).end('Not found');
    res.render('chocolates/edit', { chocolate });
  })
  .catch((err) => {
    res.status(500).end(err);
  });
}

// UPDATE
function updateRoute(req, res) {
  Chocolate
  .findById(req.params.id)
  .exec()
  .then((chocolate) => {
    if (!chocolate) return res.status(404).send('Not found');
    // loops through that object for each field
    for(const field in req.body) {
      chocolate[field] = req.body[field];
    }
    return chocolate.save();
  })
  .then((chocolate) => {
    res.redirect(`/chocolates/${ chocolate.id }`);
  })
  .catch((err) => {
    res.status(500).end(err);
  });
}

// DELETE
function deleteRoute(req, res) {
  Chocolate
  .findById(req.params.id)
  .exec()
  .then((chocolate) => {
    if (!chocolate) return res.status(404).send('Not found');
    return chocolate.remove();
  })
  .then(() => {
    res.redirect('/chocolates');
  })
  .catch((err) => {
    res.status(500).end(err);
  });
}

// EXPORTS
module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
