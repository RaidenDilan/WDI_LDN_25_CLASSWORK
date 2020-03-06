// Requires our npm module
const express = require('express');
const morgan = require('morgan');

// Create an express app
const app = express();

// Set up our view engine
app.set('views', `${__dirname}/views`);

// Let's use the Express templating language
app.set('view engine', 'ejs');

// Set up our static files
app.use(express.static(`${__dirname}/public`));

// Logging middleware
app.use(morgan('dev'));

// Add some middleware
// app.use((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!');
// });

// Gets homepage
app.get('/', (req, res) => {
  res.status(200).render('index', { heading: 'Welcome to the homepage!' });
});

// Gets about page
app.get('/about', (req, res) => {
  res.status(200).render('index', { heading: 'Welcome to the about page!'});
});

// Display file not found error code
app.get('*', (req, res) => {
  res.status(404).render('index', { heading: '404: File not found!'});
});

// Listen to traffic on localhost:3000
app.listen(3000, () => console.log('Express is listening...'));
