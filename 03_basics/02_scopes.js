// this is a global scope anywhere this value can be used in this file
let a = 10;
const b = 20;
var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
  // it is a block scope
  let a = 50;
  const b = 60;
  var c = 60;
}
console.log(a);
console.log(b);
console.log(c); // here var is not scope defined value it will always any if in scope it got declared

// this is also called closure function, nested function according to it's scope
function one() {
  const userName = "abrar";
  function two() {
    const website = "abrar.com";
    console.log(userName);
  }
  //   console.log(website); // this will give error as it is not in its scope
  two();
}
one();

if (true) {
  const userName = "hahaha";
  if (userName === "hahaha") {
    const website = "hahaha.com";
    console.log(`${userName} ${website}`);
  }
  //   console.log(website); // this will give error as it is not in a scope
}
// console.log(userName); // this will give error as it is not in a scope

// hoisting concept
add1Num(5); // it doesn't gives error
function add1Num(num1) {
  return num1;
}

add1NumVal(3); //it  gives error as add1NumVal is a variable this called hoisting
const add1NumVal = function (num1) {
  return num1;
};
