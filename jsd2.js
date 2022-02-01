"use strict";
const numbers = +prompt("enter the numbers");

const reverseNum = function (num) {
  let posNum = Math.abs(num);
  let rn = String(posNum).split("").reverse().join("");
  rn = +rn;
  if (rn > Math.pow(2, 31) - 1) return 0;

  return numbers < 0 ? -rn : rn;
};
console.log(reverseNum(numbers));
