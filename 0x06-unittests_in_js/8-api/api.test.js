const request = require('request');
const { expect } = require('chai');

describe('#Index page tests', function () {
  it('should return 200 status code', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      if (error) {
        console.error('Request Error:', error);
	return done(error);
      }
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return welcome message', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
    expect(body).to.equal('Welcome to the payment system');
    done();
    });
  });
});
