function sumNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum = sum + i;
    }
  }
  return sum;
}
let total = sumNumber(10);
console.log(total);

function getEvenNumbers(numbersArray) {
  return numbersArray.filter(check);
}
console.log(getEvenNumbers([2, 4, 5, 6]));

function check(num) {
  if (num % 2 == 0) {
    return num;
  }
}
