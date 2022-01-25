let count = 0;

function cc(card) {
  if (card <= 6) {
    count++;
  } else if (card <= 9) {
    count;
  } else {
    count--;
  }

  let holdbet = "";
  if (count > 0) {
    holdbet = "Bet";
  } else {
    holdbet = "Hold";
  }

  return count + " " + holdbet;
}

cc(3);
cc(7);
cc("K");
cc("A");
console.log(cc(2), cc(3));
