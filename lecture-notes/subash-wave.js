function wave(str) {
  // Code here
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str.toLowerCase());
  }
  // console.log(arr)
  let newString = [];
  let currentString = "";
  // console.log(arr.length)
  for (let j = 0; j < arr.length; j++) {
    currentString = arr[j];
    for (k = 0; k < currentString.length; k++) {
      newString.push(
        currentString.replace(currentString[k], currentString[k].toUpperCase())
      );
    }
    break;
  }
  return newString;
}
console.log(wave("hello world"));
