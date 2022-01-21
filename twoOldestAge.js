let age = [2, 101, 6, 95, 7, 8, 80, 96, 100, 67, 99];

function twoOldestAges(age) {
  let newArr = [];
  let oldestAge = age[0];
  let almostOld = age[0];
  for (let i = 0; i < age.length; i++) {
    if (oldestAge < age[i]) {
      almostOld = oldestAge;
      oldestAge = age[i];
    } else if (almostOld < age[i]) {
      almostOld = age[i];
    }
  }
  newArr.push(oldestAge, almostOld);
  return newArr;
}
let oldest = twoOldestAges(age);
console.log(oldest);
