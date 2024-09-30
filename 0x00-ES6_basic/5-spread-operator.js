export default function concatArrays(array1, array2, string) {
  const output = [...array1, ...array2, ...string];
  return output;
}
