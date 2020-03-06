const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const databaseURI = 'mongodb://localhost/seeding-data';
mongoose.connect(databaseURI);

const Trainer = require('../models/trainer');
const Computer = require('../models/computer');

Trainer.collection.drop();
Computer.collection.drop();

Trainer
  .create([{
    brand: 'Nike',
    model: 'Air Force 1',
    image: 'http://images3.nike.com/is/image/DotCom/PDP_HERO_ZOOM/315115_112_C_PREM/air-force-1-07-shoe.jpg',
    colors: ['black', 'blue', 'green', 'orange', 'pink', 'teal', 'mauve'],
    rrp: 89.99
  },{
    brand: 'Adidas',
    model: 'Campus',
    image: 'http://media.office.co.uk/medias/sys_master/root/hfc/h1a/8987445428254.jpg?version=2.2.3',
    colors: ['blue', 'red', 'orange', 'pink', 'olive', 'grey'],
    rrp: 69.99
  }])
  .then((trainers) => {
    console.log(`${trainers.length} trainers created!`);

    return Computer.create([{
      brand: 'Apple',
      model: 'MacBook Air',
      image: 'https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/air/macbook-air-gallery2-2014',
      ram: 8,
      processor: '1.7 GHz Intel Core i7',
      capacity: 250,
      rrp: 999.99
    }]);
  })
  .then((computers) => {
    console.log(`${computers.length} computers created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });