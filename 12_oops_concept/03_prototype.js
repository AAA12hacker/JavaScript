const userName = "abrar";

console.log(userName.length); // return 5
const userNameWithSpace = "abrar    ";

console.log(userNameWithSpace.length); // return 9 as it consider spaces
// console.log(userNameWithSpace.trueLength()); // userNameWithSpace.trueLength is not a function
// now let's create a method of trueLength to access the only name's length with removing spaces
String.prototype.trueLength = function () {
  return this.trim().length;
};
// you can print like this
console.log(userNameWithSpace.trueLength());
// or you can create a new object of string then can access it's properties
String.prototype.trueLengthWithParam = function (userName) {
  this.userName = userName.trim().length;
  console.log(this.userName);
  return this.userName;
};
const string = new String();
console.log(string.trueLengthWithParam("hello  "));

// another example//

// here we will directly target the main herireachy which is object
// if we are adding in method to object it will be available for all the datatype which contains prototype(object)

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.abrar = function () {
  console.log(`abrar is present in all objects`);
};

// heroPower.abrar() // object contains the abrar method
// myHeros.abrar() // array also contains the abrar mehtod
// reason we had added the method directly to the object

// if we just added to the array it will only contains this method
// it will not contain in the object and it's siblings which are string, function.....
Array.prototype.heyAbrar = function () {
  console.log(`Abrar says hello`);
};

// myHeros.heyAbrar() // it will the result as it is array
// heroPower.heyAbrar() // it will throw error as it is object and it doesn't contain this method
