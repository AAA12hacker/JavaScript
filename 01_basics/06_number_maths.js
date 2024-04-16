const number1 = 100;

const numberOnly = new Number(100);
console.log(number1, numberOnly);
console.log(typeof number1);
console.log(typeof numberOnly);

console.log(numberOnly.toString());
console.log(numberOnly.toFixed(2));
const floatNum = 1000.167;
// it rounds the value after the point number with the given index
console.log(floatNum.toPrecision(5));

// using round concept
// maths concept ////////
const numberToround = 1000.71;
console.log(Math.round(100.21)); // output=>100
console.log(Math.round(100.61)); // output=>101
console.log(Math.ceil(100.21)); // 101
console.log(Math.floor(100.9)); // 100

// most use random
// it gives us a random value
console.log(Math.random() * 10 + 1); // range from 0 to 10

const min = 10;
const max = 20;
console.log(Math.random() * (max - min)); // range from 0 to 10
console.log(Math.random() * (max - min) + min); // range from 10 to 20 as adding min
console.log(Math.round(Math.random() * (max - min)) + min); // range from 10 to 20 as adding min, and rounds the decimal
