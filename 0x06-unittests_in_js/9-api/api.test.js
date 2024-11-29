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

  it('should return 200 if id is number', function (done) {
    request.get('http://localhost:7865/cart/2', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 2');
      done();
    });
  });

  it('should return 404 if id is not a number', function (done) {
    request.get('http://localhost:7865/cart/hi', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Cannot GET /cart/hi');
      done();
    });
  });
});  
