const express = require('express');
const morgan = require('morgan');

const expresslayouts = require('express-ejs-layouts');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const databaseURI = 'mongodb://localhost/seeding-data';
mongoose.connect(databaseURI);

const Trainer = require('./models/trainer');
const Computer = require('./models/computer');

const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(morgan('dev'));

app.use(expresslayouts);

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/trainers', (req, res) => {
  Trainer
   .find()
   .sort({ model: -1}) // the order of the model being rendered first. -1(z-a) & 1(a-z)
   .exec() // execute our query get a REAL promise
   .then((records) => {
     res.render('trainers', { records });
   });
});

app.get('/computers', (req, res) => {
  Computer
   .find()
   .exec() // execute our query get a REAL promise
   .then((records) => {
     res.render('computers', { records });
   });
});

app.get('*', (req, res) => {
  res.render('404');
});

app.listen(3000, () => console.log('Express is listening to port 3000'));
