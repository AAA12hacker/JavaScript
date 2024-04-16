// declaration of variables in a each way
const pie = 3.16;
let name = "abrar";
var city = "london";
phonenumber = 1234556;

// this are the ways of declaring the variables

// const=> cannot be changed if you are declaring const it will give a error

/* difference between let and var 
let is a block scoped element means example
it will not change if we declare the variable with same name in a another block scope

this is one block scope
   {

   }

function a() {
  let i = 20;
  for (let i = 10; i < 12; i++) {
    console.log(i);
  }
  console.log(i);
}

a();
output:
10
11
20

but var will be changed in a file anywhere if you change the value it will always consider latest value
function b() {
  var i = 20;
  for (var i = 10; i < 12; i++) {
    console.log(i);
  }
  console.log(i);
}

b()
output:
10
11
12



*/

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
