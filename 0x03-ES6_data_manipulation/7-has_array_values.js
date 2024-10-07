export default function hasValuesFromArray(set, array) {
  const hasValue = array.some((item) => set.has(item));
  return hasValue;
}
