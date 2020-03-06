// THROWING AN ERROR FUNCTION
function customResponses(req, res, next) {
  res.notFound = function notFound() {
    const err = new Error('notfound');
    err.status = 404;
    throw err;
  };
  next();
}

module.exports = customResponses;
