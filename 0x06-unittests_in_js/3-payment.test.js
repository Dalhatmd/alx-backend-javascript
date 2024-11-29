const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber', () => {
        console.log('Utils object:', Utils);
        
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        
        const result = sendPaymentRequestToApi(100, 20);
        
        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
        
        calculateNumberSpy.restore();
    });
});
