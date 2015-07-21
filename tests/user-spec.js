var app = require('../app');
var request = require('supertest');
var expect = require('expect.js');

describe('GET /users', function(){
  it('respond users json', function(done){
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if(err) throw err;

        expect(res.body).to.be.an(Array);
        expect(res.body).to.have.length(1);
        expect(res.body[0].username).to.be('langerhans');

        done();
      });
  });
});
