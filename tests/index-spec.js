
var app = require('../app');
var request = require('supertest');
var expect = require('expect.js');

describe('GET /', function(){
  it('respond index', function(done){
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if(err) throw err;
        done();
      });
  });
});
