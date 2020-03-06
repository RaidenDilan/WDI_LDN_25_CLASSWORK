const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
const Donut = require('../models/donut');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

Donut.collection.drop();

Donut
  .create([{
    style: 'Classic',
    flavour: 'Chocolate'
  }, {
    style: 'Old Fashioned',
    flavour: 'Caramel'
  }, {
    style: 'Classic',
    flavour: 'Original Glazed'
  }, {
    style: 'Classic',
    flavour: 'Glazed Rasberry'
  }, {
    style: 'Old Fashioned',
    flavour: 'Original Glazed'
  }, {
    style: 'Ring',
    flavour: 'Vanilla'
  }])
  .then((donuts) => console.log(`${donuts.length} Donut(s) created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
