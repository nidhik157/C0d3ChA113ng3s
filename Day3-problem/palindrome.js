const isPalindrome = function (num) {
  let sum = 0,
    r,
    n = num;
  while (n !== 0) {
    r = n % 10;
    sum = sum * 10 + r;
    n = parseInt(n / 10);
  }
  console.log(num === sum ? true : false);
};

const isPalindrome2 = function (num) {
  let x = "" + num;
  let y = "";
  for (let i = x.length - 1; i >= 0; i--) {
    y += x.charAt(i);
  }
  console.log(x === y ? true : false);
};

const isPalindrome3 = function (num) {
  const x = String(num).split("").reverse().join("");
  console.log(+x === num ? true : false);
};
