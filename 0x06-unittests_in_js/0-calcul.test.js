const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Calculate', function () {
  it('should return 2', function () {
    assert.equal(calculateNumber(1, 1), 2);
  });
  it('should return 6', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('should return 5', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 5', function () {
      assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should return 4', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should return -4', () => {
    assert.strictEqual(calculateNumber(-1, -2.7), -4);
  });
  it('should return -4', () => {
    assert.strictEqual(calculateNumber(-1.7, -2), -4);
  });
});
