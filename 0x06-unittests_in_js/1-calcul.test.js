const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Calculate', function () {
  it('should return 2', function () {
    assert.equal(calculateNumber("SUM", 1, 1), 2);
  });
  it('should return -4', function () {
    assert.equal(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
  });
  it('should return 0.2', function () {
    assert.equal(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
  });
  it('should return Error', function () {
      assert.equal(calculateNumber("DIVIDE", 1.4, 0), 'Error');
  });
  it('should return 6', function () {
    assert.equal(calculateNumber("SUM", 1.4, 4.5), 6);
  });
});
