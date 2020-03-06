const Hotel = require('../models/hotel');

function indexRoute(req, res, next) {
  Hotel
    .find()
    .populate('createdBy')
    .exec()
    .then((hotels) => res.render('hotels/index', { hotels }))
    .catch(next);
}

function newRoute(req, res) {
  return res.render('hotels/new');
}

function createRoute(req, res, next) {

  req.body.createdBy = req.user;

  Hotel
    .create(req.body)
    .then(() => res.redirect('/hotels'))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/hotels/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function showRoute(req, res, next) {
  Hotel
    .findById(req.params.id)
    .populate('comments.createdBy')
    .exec()
    .then((hotel) => {
      if(!hotel) return res.notFound();
      return res.render('hotels/show', { hotel });
    })
    .catch(next);
}

function editRoute(req, res, next) {
  Hotel
    .findById(req.params.id)
    .exec()
    .then((hotel) => {
      return res.render('hotels/edit', { hotel });
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Hotel
    .findById(req.params.id)
    .exec()
    .then((hotel) => {
      if(!hotel) return res.notFound();

      for(const field in req.body) {
        hotel[field] = req.body[field];
      }

      return hotel.save();
    })
    .then(() => res.redirect(`/hotels/${req.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/hotels/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function deleteRoute(req, res, next) {
  Hotel
    .findById(req.params.id)
    .exec()
    .then((hotel) => {
      if(!hotel) return res.notFound();
      return hotel.remove();
    })
    .then(() => res.redirect('/hotels'))
    .catch(next);
}

function createCommentRoute(req, res, next) {

  req.body.createdBy = req.user;

  Hotel
  .findById(req.params.id)
  .exec()
  .then((hotel) => {
    if(!hotel) return res.notFound();

    hotel.comments.push(req.body); // create an embedded record
    return hotel.save();
  })
  .then((hotel) => res.redirect(`/hotels/${hotel.id}`))
  .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Hotel
  .findById(req.params.id)
  .exec()
  .then((hotel) => {
    if(!hotel) return res.notFound();
    // get the embedded record by it's id
    const comment = hotel.comments.id(req.params.commentId);
    comment.remove();

    return hotel.save();
  })
  .then((hotel) => res.redirect(`/hotels/${hotel.id}`))
  .catch(next);
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
