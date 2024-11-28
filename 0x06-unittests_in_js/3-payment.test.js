const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;

    beforeEach(() => {
        // Create a stub for Utils.calculateNumber
        calculateNumberStub = sinon.stub(Utils.prototype, 'calculateNumber');
        calculateNumberStub.withArgs('SUM', 100, 20).returns(120);
    });

    afterEach(() => {
        // Restore the stub
        calculateNumberStub.restore();
    });

    it('should use Utils.calculateNumber', () => {
        const result = sendPaymentRequestToApi(100, 20);

        // Verify the stub was called with the correct arguments
        sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
        
        // Verify the result
        expect(result).to.equal(120);
    });
});
