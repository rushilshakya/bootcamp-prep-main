/*
OBJECTS: Key Value pairs
- similarity to array
- dissimilarity to array

- creating
- typeof
- doing stuff with objects
  - accessing
    - [] <- can pass any expression that evaluates to string / key
    - . notation <- does not need quotations, so cannot pass variable
    - nested arrays / objects
      - accessing nested objects
  - changing
  - adding
  - deleting
  - finding 'key' in objects

- looping through object
  - for in
  - object.keys
*/
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
