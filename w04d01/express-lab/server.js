// Require the stuff we need
const express = require('express');
const morgan = require('morgan');

// Build the app
const app = express();

// Set the view directory to /views
app.set('views', `${__dirname}/views`);

// Let's use the Express templating language
app.set('view engine', 'ejs');

app.use(morgan());

app.get('/', (req, res) => {
  res.render('index', { message: 'Do you have a test for that?' });
});

app.get('/pass', (req, res) => {
  res.render('index', { message: 'Does the test pass?' });
});

app.get('/refactor', (req, res) => {
  res.render('index', { message: 'Need to refactor?' });
});

app.get('/do_refactor', (req, res) => {
  res.render('result', { message: 'Refactor the code' });
});

app.get('/new_feature', (req, res) => {
  res.render('result', { message: 'Select a new feature to implement' });
});

app.get('/write_test', (req, res) => {
  res.render('result', { message: 'Write a test' });
});

app.get('/write_code', (req, res) => {
  res.render('result', { message: 'Write just enough code for the test to pass.' });
});

// Logging middleware
app.use((req, res, next) => {
  console.log(`In comes a ${req.method} request to ${req.url}`);
  next();
});

// Add some middleware
app.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Yo Yo Yo!');
});

// Start it up!
app.listen(3000, () => console.log('Express is up and running'));
