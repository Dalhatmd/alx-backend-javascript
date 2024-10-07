export default function getStudentIdsSum(arr) {
  const sum = arr.reduce((total, student) => total + student.id, 0);
  return sum;
}
