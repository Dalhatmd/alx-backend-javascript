const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
  it('should resolve with data when success is true', (done) => {
    getPaymentTokenFromApi(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(done);
  });

  it('should return undefined when success is false', (done) => {
    const result = getPaymentTokenFromApi(false);

    expect(result).to.be.undefined;
    done();
  });
});
