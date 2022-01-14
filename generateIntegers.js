function generateIntegers(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}
let result = generateIntegers(15);
console.log(result);
