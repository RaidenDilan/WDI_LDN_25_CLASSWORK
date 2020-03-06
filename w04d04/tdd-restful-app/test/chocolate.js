/* global beforeEach, describe, xdescribe, it */

process.env.NODE_ENV = 'test';

const should = require('chai').should();
const expect = require('chai').expect;
const app = require('supertest')(require('../server'));
const Chocolate = require('../models/chocolate');

const testData = [{
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
}];

beforeEach((done) => {
  Chocolate.collection.drop();
  Chocolate.create(testData, done);
});
// INDEX
xdescribe('GET /chocolates', () => {

  it('should return a 200 response', (done) => {
    app
      .get('/chocolates')
      .expect(200, done);
  });

  it('should display all the chocolates', (done) => {
    app
      .get('/chocolates')
      .end((err, res) => {
        testData.forEach((record) => {
          expect(res.text).to.contain(`<h2>${record.name}</h2>`);
          expect(res.text).to.contain(`<h4>${record.brand}</h4>`);
          expect(res.text).to.contain(`src="${record.image}"`);
        });
        done();
      });
  });

});
// NEW
xdescribe('GET /chocolates/new', () => {

  it('should return a 200 response', (done) => {
    app
      .get('/chocolates/new')
      .expect(200, done);
  });

  it('should display a form', (done) => {
    app
      .get('/chocolates/new')
      .end((err, res) => {
        expect(res.text).to.contain('<form method="POST" action="/chocolates">');
        expect(res.text).to.contain('name="name"');
        expect(res.text).to.contain('name="brand"');
        expect(res.text).to.contain('name="image"');
        done();
      });
  });

});
// CREATE
xdescribe('POST /chocolates', () => {

  it('should redirect to /chocolates', (done) => {
    app.post('/chocolates')
      .type('form')
      .send({
        name: 'Borneville',
        brand: 'Cadbury',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41kP6BK5WlL.jpg'
      })
      .end((err, res) => {
        expect(res.status).to.equal(302);
        expect(res.headers.location).to.equal('/chocolates');
        done();
      });
  });

  it('should create a new chocolate', (done) => {
    app.post('/chocolates')
      .type('form')
      .send({
        name: 'Borneville',
        brand: 'Cadbury',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41kP6BK5WlL.jpg'
      })
      .end(() => {
        app.get('/chocolates')
          .end((err, res) => {
            expect(res.text).to.contain('<h2>Borneville</h2>');
            expect(res.text).to.contain('<h4>Cadbury</h4>');
            expect(res.text).to.contain('src="https://images-na.ssl-images-amazon.com/images/I/41kP6BK5WlL.jpg"');
            done();
          });
      });
  });

});

xdescribe('GET /chocolates/:id', () => {

  let record = null;
  beforeEach((done) => {
    Chocolate.findOne({ name: 'Topic' }, (err, chocolate) => {
      record = chocolate;
      done();
    });
  });

  it('should return a 200 response', (done) => {
    app.get(`/chocolates/${record.id}`)
      .expect(200, done);
  });

  it('should display the chocolate', (done) => {
    app.get(`/chocolates/${record.id}`)
      .end((err, res) => {
        expect(res.text).to.contain('<h1>Topic</h1>');
        expect(res.text).to.contain('<h4>Mars</h4>');
        expect(res.text).to.contain('src="https://images-na.ssl-images-amazon.com/images/I/31w29%2BTlWQL.jpg"');
        done();
      });
  });

  it('should display an edit link', (done) => {
    app.get(`/chocolates/${record.id}`)
      .end((err, res) => {
        expect(res.text).to.contain(`href="/chocolates/${record.id}/edit"`);
        done();
      });
  });

  it('should display a delete form', (done) => {
    app.get(`/chocolates/${record.id}`)
      .end((err, res) => {
        expect(res.text).to.contain(`<form method="POST" action="/chocolates/${record.id}">`);
        expect(res.text).to.contain('<input type="hidden" name="_method" value="DELETE">');
        done();
      });
  });

});

describe('GET /chocolates/:id/edit', () => {

  let record = null;
  beforeEach((done) => {
    Chocolate.findOne({ name: 'Topic' }, (err, chocolate) => {
      record = chocolate;
      done();
    });
  });

  it('should return a 200 response', (done) => {
    app.get(`/chocolates/${record.id}/edit`)
      .expect(200, done);
  });

  it('should display a pre-populated form', (done) => {
    app.get(`/chocolates/${record.id}/edit`)
      .end((err, res) => {
        expect(res.text).to.contain(`<form method="POST" action="/chocolates/${record.id}">`);
        expect(res.text).to.contain('<input type="hidden" name="_method" value="PUT">');
        expect(res.text).to.contain('value="Topic"');
        expect(res.text).to.contain('value="Mars"');
        expect(res.text).to.contain('value="https://images-na.ssl-images-amazon.com/images/I/31w29%2BTlWQL.jpg"');
        done();
      });
  });

});

xdescribe('PUT /chocolates/:id', () => {

  let record = null;
  beforeEach((done) => {
    Chocolate.findOne({ name: 'Topic' }, (err, chocolate) => {
      record = chocolate;
      done();
    });
  });

  it('should redirect to /chocolates/:id', (done) => {
    app.post(`/chocolates/${record.id}`)
      .type('form')
      .send({
        _method: 'PUT',
        name: 'Borneville',
        brand: 'Cadbury',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41kP6BK5WlL.jpg'
      })
      .end((err, res) => {
        expect(res.status).to.equal(302);
        expect(res.headers.location).to.equal(`/chocolates/${record.id}`);
        done();
      });
  });

  it('should update the chocolate', (done) => {
    app.post(`/chocolates/${record.id}`)
      .type('form')
      .send({
        _method: 'PUT',
        name: 'Borneville',
        brand: 'Cadbury',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41kP6BK5WlL.jpg'
      })
      .end(() => {
        app.get(`/chocolates/${record.id}`)
          .end((err, res) => {
            expect(res.text).to.contain('<h1>Borneville</h1>');
            expect(res.text).to.contain('<h4>Cadbury</h4>');
            expect(res.text).to.contain('src="https://images-na.ssl-images-amazon.com/images/I/41kP6BK5WlL.jpg"');
            done();
          });
      });
  });

});

xdescribe('DELETE /chocolates/:id', () => {

  let record = null;
  beforeEach((done) => {
    Chocolate.findOne({ name: 'Topic' }, (err, chocolate) => {
      record = chocolate;
      done();
    });
  });

  it('should redirect to /chocolates', (done) => {
    app.post(`/chocolates/${record.id}`)
      .type('form')
      .send({
        _method: 'DELETE'
      })
      .end((err, res) => {
        expect(res.status).to.equal(302);
        expect(res.headers.location).to.equal('/chocolates');
        done();
      });
  });

  it('should delete the chocolate', (done) => {
    app.post(`/chocolates/${record.id}`)
      .type('form')
      .send({
        _method: 'DELETE'
      })
      .end(() => {
        app.get('/chocolates')
          .end((err, res) => {
            expect(res.text).to.not.contain('<h2>Topic</h2>');
            done();
          });
      });
  });

});
