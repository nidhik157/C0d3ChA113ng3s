const arrLength = function (arr, val) {
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[pos] = arr[i];
      pos++;
    }
  }
  console.log(pos);
};
