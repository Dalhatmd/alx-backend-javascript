const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Calculate', function () {
  it('should return 2', function () {
    assert.equal(calculateNumber(1, 1), 2);
  });
  it('should raise a TypeError', function () {
    assert.throws(() => {
      calculateNumber('a',1);
    }, {
      name: 'TypeError',
      message: 'Both arguments must be numbers'
    });
  it('should raise a TypeError', function () {
    assert.throws(() => {
      calculateNumber(2, 'c');
    }, {
      name: 'TypeError',
      message: 'Both arguments must be numbers'
    });
    });
  });
});
