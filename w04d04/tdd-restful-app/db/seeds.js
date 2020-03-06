const mongoose = require('mongoose');
const Promise = require('bluebird');

const { dbURI } = require('./config/environment');

mongoose.Promise = Promise;
mongoose.connect(dbURI);

const Chocolate = require('../models/chocolate');

Chocolate.create([{
  name: 'Topic',
  brand: 'Mars',
  image: 'https://images-na.ssl-images-amazon.com/images/I/31w29%2BTlWQL.jpg'
},{
  name: 'Mars',
  brand: 'Mars',
  image: 'https://images-na.ssl-images-amazon.com/images/I/71NrROgheSL._SX522_.jpg'
},{
  name: 'Bounty',
  brand: 'Mars',
  image: 'https://upload.wikimedia.org/wikipedia/en/1/19/Bounty-Wrapper-Small.jpg'
},{
  name: 'Lion',
  brand: 'Nestlé',
  image: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Lion-Bar-Wrapper-Small.jpg'
},{
  name: 'Crunchie',
  brand: 'Cadbury',
  image: 'http://sweets.seriouseats.com/assets_c/2013/10/20131015-crunchie-package-post-thumb-610x183-358867.jpg'
},{
  name: 'Wispa',
  brand: 'Cadbury',
  image: 'https://www.cadburygiftsdirect.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/w/i/wispa-1200x500px.png'
}])
.then(records => console.log(`${records.length} chocolates created.`))
.catch(err => console.log(err))
.finally(() => mongoose.connection.close());
