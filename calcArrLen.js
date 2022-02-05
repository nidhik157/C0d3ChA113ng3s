//not allocating a new memory---modifying the original array
const arrLength = function (arr) {
  let j = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[j] = arr[i];
      j++;
    }
  }
  //this function will not modify the orginal array so that it contains only unique elemnts, only length has been taken care of.
  console.log(j);
};

const arrLength1 = function (arr) {
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[j++] = arr[i + 1];
    }
  }
  for (let a = 0; a < arr.length; a++) {
    if (!arr[a]) arr.splice(a);
  }
  console.log(arr, arr.length);
};

//allocating a new memory space
const arrLength2 = function (arr) {
  const arr1 = new Set(arr);
  console.log([...arr1], [...arr1].length);
};

const arrlength3 = function (arr) {
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr1) acc.push(arr[i]);
    if (arr1.includes(arr[i])) continue;
    else arr1.push(arr[i]);
  }
  console.log(arr1, arr1.length);
};

const arrLength4 = function (arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) obj[arr[i]] = 1;
    if (arr[i] === arr[i + 1]) obj[arr[i]]++;
  }
  console.log(obj);
  console.log(Object.keys(obj));
  console.log(Object.keys(obj).length);
};

const arrLength5 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1, "");
    }
  }
  let arr1 = arr.filter((a) => typeof a === "number");
  console.log(arr1, arr1.length);
};
