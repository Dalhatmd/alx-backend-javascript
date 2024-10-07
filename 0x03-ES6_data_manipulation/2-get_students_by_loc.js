export default function getStudentsByLocation(arr, city) {
  const inCity = arr.filter((student) => student.location === city);
  return inCity;
}
