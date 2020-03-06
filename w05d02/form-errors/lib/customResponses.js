function customResponses(req, res, next) {
  res.notFound = function notFound() {
    const err = new Error('Not Found');
    err.status = 404;

    throw err;
  };

  res.badResquest = function badResquest(url, errors) {
    req.flash('danger', errors);
    return res.redirect(url);
  };

  next();
}

module.exports = customResponses;
