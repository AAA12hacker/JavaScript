"use strict"; // treat all JS code as newer version

let score = 22;
let nameVal = "london";
let isLoggedIn = true;
let isNull = null;
let state;

// typeof variable is used to find the type of the variable
// you can write it two ways
console.log(typeof score); // it will return number
//or
console.log(typeof nameVal); // it will return string

console.log(typeof isLoggedIn); // it will return boolean

console.log(typeof isNull); // it will return as a object

console.log(typeof state); // it will return as a undefined

// if we want to print multiple variable then we can use it in two ways
console.log({ score, nameVal, isLoggedIn });
/* it prints like this
{ score: 22, nameVal: 'london', isLoggedIn: true }
*/
//or
console.table([score, nameVal, isLoggedIn]);
/*
it prints like this
┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │    22    │
│    1    │ 'london' │
│    2    │   true   │
└─────────┴──────────┘
*/

// more details
// number => 2 to power 53 ranges
// bigint=> if you are number is tooo bigg
// string => ""
// boolean => true/false
/* null => standalone value => null is a used the reason behind 
if the temperature is not returing so we can't return -1 or 0 because this is also a temperature
so in that case null comes into picture
*/
// undefined =>
// symbol => unique
