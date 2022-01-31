const inputNum = prompt("enter the numbers");
const num = inputNum.split(" ");
console.log(num);
const target = Number(prompt("enter the target value"));
console.log(target);

let y = [];

for (let i = 0; i < num.length; i++) {
  let diff = String(target - num[i]);
  if (diff > 0 && num.includes(diff) && num[i] !== diff) y.push(i);
  if (num[i] === diff) {
    let num1 = num.slice();
    num1.splice(i, 1);
    if (num1.includes(diff)) y.push(i);
  }
}
console.log(y);
