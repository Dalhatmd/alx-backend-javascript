const assert = require('assert');
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('uses a stub to simulate correct output', () => {
	const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
	const result = sendPaymentRequestToApi(5, 5);
        assert.strictEqual(result, 10);
	assert(stub.calledWith('SUM', 5, 5));

	stub.restore();
    });
});
