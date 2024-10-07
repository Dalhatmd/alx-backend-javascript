export default function hasValuesFromArray(set, array) {
  const hasValue = array.every((item) => set.has(item));
  return hasValue;
}
