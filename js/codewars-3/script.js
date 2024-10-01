"use strict";
function points(games) {
  return games;
  let total = 0;
  games.forEach((games) => {
    let [x, y] = games.split(":").map(Number);
  });

  if (x > y) {
    total += 3;
  } else if ((x = y)) {
    total += 1;
  } else {
    return total;
  }
  console.log(points(["3:1", "3:2", "0:1"]));
}
