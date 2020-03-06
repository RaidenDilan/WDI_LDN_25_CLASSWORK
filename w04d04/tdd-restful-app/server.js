const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const expressLayouts = require('express-ejs-layouts');
const routes = require('./config/routes');
const { env, port, dbURI } = require('./config/environment');

const app = express();

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);

app.use(express.static(`${__dirname}/public`));

if(env !== 'test') app.use(morgan('dev'));

app.use(routes);

app.listen(port, () => console.log(`Running on port: ${port}`));

module.exports = app;