"use strict";
function abbrevName(name) {
  const result = name.split(" ");
  const sum = result[0][0].toUpperCase() + "." + result[1][0].toUpperCase();
  return sum;
}
console.log(abbrevName("narges kalhor"));
