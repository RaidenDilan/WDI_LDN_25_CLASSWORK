const Film = require('../models/film');
const genres = [
  'Action',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'Horror',
  'Romance',
  'Sci',
  'Sport',
  'Thriller'
];

function filmsIndex(req, res) {
  Film
    .find()
    .then((films) => res.render('films/index', { films }));
}

function filmsNew(req, res) {
  res.render('films/new', { genres });
}

function filmsCreate(req, res) {
  Film
    .create(req.body)
    .then(() => res.redirect('/films'));
}

function filmsShow(req, res, next) {
  Film
    .findById(req.params.id)
    .then((film) => {
      if(!film) res.notFound();
      res.render('films/show', { film });
    })
    .catch(next);
}

function filmsEdit(req, res) {
  Film
    .findById(req.params.id)
    .then((film) => {
      if(!film) return res.notFound();
      res.render('films/edit', { film, genres });
    });
}

function filmsUpdate(req, res) {
  Film
    .findById(req.params.id)
    .then((film) => {
      if(!film) return res.notFound();

      for(const field in req.body) {
        film[field] = req.body[field];
      }

      return film.save();
    })
    .then((film) => res.redirect(`/films/${film.id}`));
}

function filmsDelete(req, res) {
  Film
    .findById(req.params.id)
    .then((film) => {
      if(!film) return res.notFound();
      return film.remove();
    })
    .then(() => res.redirect('/films'));
}

module.exports = {
  index: filmsIndex,
  new: filmsNew,
  create: filmsCreate,
  show: filmsShow,
  edit: filmsEdit,
  update: filmsUpdate,
  delete: filmsDelete
};
