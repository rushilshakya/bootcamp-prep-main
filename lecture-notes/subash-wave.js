function wave(str) {
  // Code here
  // let arr = [];
  // for (let i = 0; i < str.length; i++) {
  //   arr.push(str.toLowerCase());
  // }
  // console.log(arr)
  let newString = [];
  // let currentString = "";
  // console.log(arr.length)
  // for (let j = 0; j < arr.length; j++) {
  // currentString = arr[j];
  for (k = 0; k < str.length; k++) {
    //You need to skip empty strings
    if (str[k] !== " ") {
      //This code will not work because each time only the first occurrence is replaced
      // newString.push(str.replace(str[k], str[k].toUpperCase()));
      newString.push(str.slice(0, k) + str[k].toUpperCase() + str.slice(k + 1));
    }
  }
  // break;
  // }
  return newString;
}
console.log(wave("hello world"));
