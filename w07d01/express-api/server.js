const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.Promise = require('bluebird');
const routes = require('./config/routes');
const customResponses = require('./lib/customResponses');
const errorHandler = require('./lib/errorHandler');
const { port, env, dbURI } = require('./config/environment');

// create an express app
const app = express();

app.use(customResponses);

// connect to our database
mongoose.connect(dbURI);

// set up middleware
// only use morgan in dev AND production
if(env !== 'test') app.use(morgan('dev'));

// set up bodyParser to use JSON
app.use(bodyParser.json());

// set up our routes - just BEFORE our error handler
app.use(routes);

/// global errorHandler goes AFTER routes
app.use(errorHandler);

app.listen(port, () => console.log(`API online - port ${port}`));
