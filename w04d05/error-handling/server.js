// REQUIRE MODULES
const express = require('express');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const routes = require('./config/routes');
const authentication = require('./lib/authentication');
const customResponses = require('./lib/customResponses');

const { port, env, dbURI } = require('./config/environment');

// SETUP EXPRESS APP
const app = express();
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

// SETUP DATABASE
mongoose.connect(dbURI);

// MIDDLEWARE
if(env !== 'test') app.use(morgan('dev'));

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));

// METHOD OVVERIDE
app.use(methodOverride(function (req) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// SESSION
app.use(session({
  secret: process.env.SESSION_SECRET || 'my great secret',
  resave: false,
  saveUninitialized: false
}));

// FLASH
app.use(flash());

// AUTHENTICATION
app.use(authentication);

// THROWING AN ERROR FUNCTION
app.use(customResponses);

// ROUTES
app.use(routes);

// CATCHING ERRORS
app.use((err, req, res, next) => {
  // SHOWS ERROR CODE
  err.status = err.status || 500;
  // SHOWS ERROR MESSAGE
  err.message = err.message || 'Internal Server Error';
  // IF IN PRODUCTION MODE DON'T SHOW IT TO THE WORLD
  if(env === 'production') delete err.stack;
  // SHOWS THE STATUS
  res.status(err.status);
  // PUTS THE ERRO INTO LOCALS
  res.locals.err = err;
  // RENDER AN ERROR PAGE
  res.render(`statics/${err.status}`);
  // PASSING THE ERRO BACK INTO THE CONSOLE IN TERMINAL
  next(err);
});

app.listen(port, () => console.log(`Express is listening on port ${port}`));
