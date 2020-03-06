// require modules
const express = require('express');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const routes = require('./config/routes');
const session = require('express-session');
const User = require('./models/user');
const flash = require('express-flash');

const { port, dbURI } = require('./config/environment');

// setup Express app
const app = express();
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

// setup database
mongoose.connect(dbURI);

// middleware
app.use(morgan('dev'));
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride(function (req) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// COOCKIES
app.use(session({
  secret: process.env.SESSION_SECRET || 'shh it\'s a secret',
  resave: false,
  saveUninitialzed: false
}));

// IMPLEMENT FLASH AFTER THE SESSION
app.use(flash());

// AUTHENTICATION & LOCA & USER ID
app.use((req, res, next) => {
  if(!req.session.isAuthenticated) return next();

  User
    .findById(req.session.userId)
    .then((user) => {
      if(!user) {
        res.redirect('/');
      }

      req.session.userId = user.id;

      res.locals.user = user;
      res.locals.isAuthenticated = true;

      next();
    });
});

app.use(routes);
app.listen(port, () => console.log(`Express is listening on port ${port}`));
