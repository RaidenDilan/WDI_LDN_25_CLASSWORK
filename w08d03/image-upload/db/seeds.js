const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Bird = require('../models/bird');

mongoose.connect(dbURI);

Bird.collection.drop();
console.log('All birds deleted!');
mongoose.connection.close();