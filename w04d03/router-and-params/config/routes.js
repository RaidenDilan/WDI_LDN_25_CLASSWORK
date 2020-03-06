const express = require('express');
const router = express.Router();

const Cheese = require('../models/cheese');

router.get('/', (req, res) => res.render('index'));

router.get('/cheeses', (req, res) => {
  console.log(req.query);
  Cheese
    .find(req.query)
    .exec()
    .then((cheeses) => {
      if(!cheeses) return res.status(404).end();
      res.render('cheeses', { cheeses });
    });
});

router.post('/cheeses/', (req, res) => {
  // console.log(req.body);
  Cheese
  .create(req.body)
  .then(() => res.redirect('/cheeses'))
  .catch(() => res.status(500).end());
});

router.get('/cheeses/:name', (req, res) => {
  Cheese
    .findOne({ name: req.params.name })
    .exec()
    .then((cheese) => {
      if(!cheese) return res.status(404).end();
      res.render('cheese', { cheese });
    });
    // .catch(() => res.status(500).end());
});

module.exports = router;
