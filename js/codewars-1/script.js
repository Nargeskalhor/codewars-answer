"use strict";
function bonusTime(salary, bonus) {
  let receipt;
  if (bonus) {
    receipt = salary * 10;
  } else {
    receipt = salary;
  }
  return "£" + receipt;
}
console.log(bonusTime(10, true));
