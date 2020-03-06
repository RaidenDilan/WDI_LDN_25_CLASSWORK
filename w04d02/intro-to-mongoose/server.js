// Loads mongoose
const mongoose = require('mongoose');

// Loads the databaseURI
const databaseURI = 'mongodb://localhost/intro-to-mongoose';

// Connect to database
mongoose.connect(databaseURI);

// Requires User Schema
const User = require('./models/user');

// const person = new User({
//   firstName: 'Mike',
//   email: 'mike.hayden@ga.com',
//   dob: new Date('1981-01-06')
// });

//CREATE #1
// person.save((err, user) => {
//   if(err) return console.log(err);
//   console.log(user);
// });

//CREATE #2
// User.create({
//   firstName: 'Emily',
//   lastName: 'Isacke',
//   email: 'emily.isacke@ga.com'
// }, (err, user) => {
//   if(err) return console.log(err);
//   console.log(user);
// });

// READS #1
// User.find((err, users) => {
//   if (err) return console.log(err);
//   return console.log(users);
// });

// READS #2 ALWAYS INSIDE AN ARRAY
// User.find({ firstName: 'Emily' }, (err, users) => {
//   if (err) return console.log(err);
//   return console.log(users);
// });

// READS #3 NOT INSIDE AN ARRAY
// User.findOne({ firstName: 'Emily' }, (err, users) => {
//   if (err) return console.log(err);
//   return console.log(users);
// });

// READS #4 WITH A SPECIFIC ID
// User.findById('58ac22a2b1650709d1527d13', (err, user) => {
//   if (err) return console.log(err);
//   return console.log(user);
// });

//UPDATE #1 finds one and update
// User.findOneAndUpdate({ firstName: 'Mike' }, { lastName: 'Hayden' }, { new: true }, (err, user) => {
//   if (err) return console.log(err);
//   return console.log(user);
// });

// UPDATE #2 finds by id and updates
// User.findByIdAndUpdate('58ac21948cd38209bac02725', { lastName: 'Hayden' }, { new: true }, (err, user) => {
//   if (err) return console.log(err);
//   return console.log(user);
// });

// UPDATE #3 finds by id
// User.findById('58ac21948cd38209bac02725', (err, user) => {
//   if (err) return console.log(err);
//   user.lastName = 'Hayden';
//
//   user.save((err, user) => {
//     if (err) return console.log(err);
//     return console.log(user);
//   });
// });

// DELETE #1 finds by id and deletes
// User.findByIdAndRemove('572733e9cfef9557890b3b92', err => {
//   if (err) return console.log(err);
//   return console.log('Deleted!');
// });

// DELETE #2 finds by id and deletes
// User.findById('58ac21948cd38209bac02725', (err, user) => {
//   if (err) return console.log(err);
//   if(!user) return console.log('No user found!');
//   user.remove((err) => {
//     if (err) return console.log(err);
//     return console.log('Deleted!');
//   });
// });

// UPDATE
// User.findOneAndUpdate({}, { lastName: 'Hayden' }, { new: true }, (err, user) => {
//   if (err) return console.log(err);
//   return console.log(user);
// });

// A INSTANCE METHOD
User.findOne({}, (err, user) => {
  if (err) return console.log(err);
  return console.log(user.fullName());
});

// A CLASS METHOD
User.all((err, users) => {
  if (err) return console.log(err);
  return console.log(users);
});
