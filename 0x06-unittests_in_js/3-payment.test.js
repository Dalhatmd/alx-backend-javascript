const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should use Utils.calculateNumber', () => {
        // First, log Utils to see its structure
        console.log('Utils object:', Utils);
        
        // Create a spy instead of a stub to see what's happening
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        
        const result = sendPaymentRequestToApi(100, 20);
        
        // Check if the spy was called
        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
        
        // Restore the spy
        calculateNumberSpy.restore();
    });
});
