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

/* If we list for natural numbers below 10 that are multiples 3 or 5 we get 3, 5, 6, 9.
We need to create a function that returns the sum of numbers that are multiples 3 or 5. 
We create a function that accepts a number as an argument.
Then we define a variable that will be contained the final result.

For the listing of every natural number which is included in our number, we iterate over all numbers using a loop.
At each iteration, we check the number for multiples 3 and 5.
For this, we use the remainder operator. 
If we don’t have a remainder after dividing numbers by 3 or 5 we take this number and plus it to the initial value of a variable that contains the result. 
Until we reach the sum of all numbers that are multiples 3 or 5. 
*/

function getEvenNumbers(numbersArray) {
  return numbersArray.filter(check);
}
console.log(getEvenNumbers([2, 4, 5, 6]));

function check(num) {
  if (num % 2 == 0) {
    return num;
  }
}
/*  We need to create a function that accepts as an argument array and returns a new array with even numbers. 
 For this, we need to apply the filter method for the array. We create a function which we will use as a filter. 
 So elements in our array will pass the test provided by this function. 
Since we need to return an array with even numbers we create a function that accepts any number and applies the remainder operator to it. 
If we have no remainder when dividing by two we return this number. 
(Because this is the number that we need)
And finally when we have a required function that returns even numbers we just apply it in the filter method in parentheses.
*/
