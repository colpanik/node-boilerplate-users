var passport = require('passport');

module.exports = function(req, res) {
  res.render('index.html', { user: req.user });
}