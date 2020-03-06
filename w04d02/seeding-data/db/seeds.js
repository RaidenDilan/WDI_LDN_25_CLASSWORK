const mongoose = require('mongoose');

// Tells mongoose to use this Promise.
mongoose.Promise = require('bluebird');

const databaseURI = 'mongodb://localhost/seeding-data';
mongoose.connect(databaseURI);

const Trainer = require('../models/trainer');
const Computer = require('../models/computer');
const Book = require('../models/book');

// Delete all the trainers in the Db.
Trainer.collection.drop();

// Delete all the computer in the Db.
Computer.collection.drop();

// Delete all the Book in the Db.
Book.collection.drop();

// Create some trainers
Trainer.create([{
// This runs first
  brand: 'Nike',
  model: 'Air Force 1',
  colors: ['black', 'blue', 'white', 'green', 'orange', 'teal'],
  rrp: 89.99
}, {
  brand: 'Adidas',
  model: 'Campus',
  colors: ['blue', 'red', 'orange', 'pink', 'olive', 'grey'],
  rrp: 69.99
}])
// Then run this here
.then((trainers) => {
  if(trainers) console.log(`${trainers.length} trainers created`);

  return Computer.create([{
    brand: 'Apple',
    model: 'MacBook Air',
    ram: 8,
    processor: '1.7 GHz Intel Core i7',
    capacity: 250,
    rrp: 999.99
  }]);
})
// Then run this here
.then((computers) => {
  if(computers) console.log(`${computers.length} computers created`);

  return Book.create([{
    title: 'Game of Thrones: A Song of Ice & Fire',
    auther: 'George R. R. Martin',
    rrp: 1.000
  }]);
})
// Then run this here
.then((books) => {
  if(books) console.log(`${books.length} book created`);
})
// Then catch this here, the error message.
// If the first callback failers, it will catch an error.
.catch((err) => {
  console.log(err);
})
// Either way close the connecttion if there an error or not.
.finally(() => {
  mongoose.connection.close();
});
