"use strict";
// function points(games) {
//   let total = 0;

//   let x;
//   let y;
//   if (x > y) {
//     total += 3;
//   } else if ((x = y)) {
//     total += 1;
//   }
//   return total;
// }
// console.log(points(["3:1", "3:2", "0:1"]));

function points(games) {
  let sum = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][x] > games[i][y]) sum += 3;
    else if (games[i][x] == games[i][y]) sum += 1;
  }
  return sum;
}
console.log(points(["3:1", "2:2", "0:1"]));
