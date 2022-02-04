const findCommonPrefix = function (str) {
  let a = "";
  let i = 0;
  while (i >= 0) {
    let x = str[0][i]; //x=str[0].charAt(i)
    let y = str.every((s) => s[i] === x);
    if (y && x) {
      a += x;
    } else break;

    i++;
  }
  console.log(a);
};

const findCommonPrefix2 = function (str) {
  let a = "";
  let i = 0;
  while (i >= 0) {
    let x = str[0][i];
    for (let j = 1; j < str.length; j++) {
      y = str[j][i] === x ? true : false;
    }
    if (y && x) {
      a += x;
    } else break;
    i++;
  }

  console.log(a);
};
