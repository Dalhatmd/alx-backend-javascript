const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
    it('should use Utils.calculateNumber', function() {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
	sendPaymentRequestToApi(100, 20);
	sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);
        calculateNumberSpy.restore();
    });
});
