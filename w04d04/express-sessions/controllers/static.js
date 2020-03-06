function indexRoute(req, res) {
  res.redirect('/films');
}

module.exports = {
  index: indexRoute
};