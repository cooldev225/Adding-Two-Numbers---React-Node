export default function validateNumber(value) {
  return isNaN(+value) ? false : true;
}
