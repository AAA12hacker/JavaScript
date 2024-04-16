let i = "30"; // for this if we convert to number then it will return proper number
let stringNumber = "33abc";
console.log(Number(stringNumber)); // this will return NAN as it is not a valid nuber
console.log(typeof Number(stringNumber)); // but is type got changed to Number
console.log(typeof i);
let iToNumber = Number(i);
console.log(typeof iToNumber); //number type
console.log("1");
let isNull = null;
console.log(Number(isNull)); // it returns 0 value
console.log(typeof Number(isNull), "testss"); // number

console.log("2");
console.log(String(isNull), "test2"); // it return null
console.log(typeof String(isNull)); // type strings
console.log("3");
let isUndef = undefined;
console.log(Number(undefined)); // it return NAN if you convert undefined to number
console.log(typeof Number(undefined)); // type will be number
console.log("4");
console.log(String(undefined)); // it return undefined
console.log(typeof String(undefined)); // type will be string
console.log("5");
let isBool = 1;
console.log(typeof isBool); // return number
console.log(Boolean(isBool)); // when 1 is thre it return true for 0 it return false
console.log(typeof Boolean(isBool)); // type boolean

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue); // -3

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**3); // 8 "**" act as a power basically it is 2^3
console.log(8 / 1024); //  return 128
console.log(8 % 1024); // return 8 it consider remider

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
