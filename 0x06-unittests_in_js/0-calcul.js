function calculateNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  a = Math.round(a);
  b = Math.round(b);
  return a + b;
}

module.exports = calculateNumber;
