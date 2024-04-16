const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map is will return the value in array format, so if you want to return the value yu can use map,
// foreach will not return
// const totalNumber = myNumbers.map((item) => item * 10);
// console.log(totalNumber);

// chaining methods imp concept

const totalNumber = myNumbers
  .map((item) => item * 10) // it return the array and the second map operate on this array
  .map((item) => item + 1) // it return the array and then filter operate on this array
  .filter((item) => item > 50); // it will return the array as a final result
console.log(totalNumber);
