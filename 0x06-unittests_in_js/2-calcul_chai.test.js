const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('#calculateNumber() with type SUM', function () {
  it('add 5 and 10', function () {
    expect(calculateNumber('SUM', 5, 10)).to.equal(15);
  });
  it('add 2 and 2.7', function () {
    expect(calculateNumber('SUM', 2, 2.7)).to.equal(5);
  });
  it('add 1.0 and 4.0', function () {
    expect(calculateNumber('SUM', 1.0, 4.0)).to.equal(5);
  });
  it('add 1.7 and 3.5', function () {
    expect(calculateNumber('SUM', 1.7, 3.5)).to.equal(6);
  });
  it('should return 0 when adding 0.1 and 0.3', function () {
    expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
  });
  it('add -0.7 and 0.7', function () {
    expect(calculateNumber('SUM', -0.7, 0.7)).to.equal(0);
  });
  it('add -0.8 and -0.7', function () {
    expect(calculateNumber('SUM', -0.8, -0.7)).to.equal(-2);
  });
});

describe('#calculateNumber() with type SUBTRACT', function () {
  it('subtract 1 and 3', function () {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
  });
  it('subtract 1.4 and 4.5', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('subtract 1.2 and 3.7', function () {
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
  });
  it('subtract 1.5 and 3.7', function () {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });
  it('subtract 0.1 and 0.3', function () {
    expect(calculateNumber('SUBTRACT', 0.1, 0.3)).to.equal(0);
  });
  it('subtract -0.7 and 0.7', function () {
    expect(calculateNumber('SUBTRACT', -0.7, 0.7)).to.equal(-2);
  });
  it('subtract -0.8 and -0.7', function () {
    expect(calculateNumber('SUBTRACT', -0.8, -0.7)).to.equal(0);
  });
  it('subtract 0.8 and -0.4', function () {
    expect(calculateNumber('SUBTRACT', 0.8, -0.4)).to.equal(1);
  });
});

describe('#calculateNumber() with type DIVIDE', function () {
  it('divide 1 and 4', function () {
    expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
  });
  it('divide 1 and 3.7', function () {
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
  });
  it('divide 1.4 and 4.5', function () {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('divide 1.6 and 2.4', function () {
    expect(calculateNumber('DIVIDE', 1.6, 2.4)).to.equal(1);
  });
  it('divide 4.2 and 1.5', function () {
    expect(calculateNumber('DIVIDE', 4.2, 1.5)).to.equal(2);
  });
  it("divide 1.3 and 0.3", function () {
    expect(calculateNumber('DIVIDE', 1.3, 0.3)).to.equal('Error');
  });
  it('divide -0.7 and 0.7', function () {
    expect(calculateNumber('DIVIDE', -0.7, 0.7)).to.equal(-1);
  });
  it('divide -0.8 and -0.7', function () {
    expect(calculateNumber('DIVIDE', -0.8, -0.7)).to.equal(1);
  });
  it('divide -44.5 and 2.4', function () {
    expect(calculateNumber('DIVIDE', -44.5, 2.4)).to.equal(-22);
  });
  it('divide -88.5 and -3.6', function () {
    expect(calculateNumber('DIVIDE', -88.5, -3.6)).to.equal(22);
  });
});
