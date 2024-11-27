describe('Calculate', function () {
  let chai;
  let calculateNumber;

  before(async function () {
    chai = await import('chai');
    expect = chai.expect;

    calculateNumber = require('./2-calcul');
  });
  it('should return 2', function () {
    expect(calculateNumber("SUM", 1, 1)).to.equal(2);
  });
  it('should return -4', function () {
    expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
  });
  it('should return 0.2', function () {
    expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
  });
  it('should return Error', function () {
      expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal('Error');
  });
  it('should return 6', function () {
    expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
  });
});
