//my code
function multipleBy5(num) {
  return num * 5;
}
multipleBy5.power = 5;
console.log(multipleBy5(2));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
// my langauge for new
function createUser(name, score, price) {
  this.name = name;
  this.score = score;
  this.price = price;

  return this;
}
// we are create our own methods and binding it too the object to use
createUser.prototype.getScore = function (score) {
  //we are make using of this reason that it should for which instance of score is called
  // jisna bhi bulaya uska jake score dedo uska context mai sai
  console.log(this.score);
  return this.score++;
};

// failed case because we didn't use new keyword
const user1 = createUser("abrar", 12, 20);
//  but here we are will get error as it is considering the prev instance or object
// which doesn't contain the getScore methode
// console.log(user1.getScore(12)); // error we are getting as user1.getScore is not a function

// to resolve this issue we need to create new instance which will contain this method
const user2 = new createUser("abrar", 12, 20);
// we don't neeed to write user2.prototype.getScore()
console.log(user2.getScore()); // here i am getting my value as 12
/*
new key word is assigned to make a new instance if you don't make new instance
it will override with the previous instance which you have made

you can create your prototype method and add it to you function, string, array .....objects
As we have seen the last prototype of every dataType is object
array.prototype(array).prototype(object)

So we can add any prototype to any of the datatype and make sure to use new key word for instance 
to get a new object which contains our prototype
*/

//// hitesh bhai /////////
// function multipleBy5(num) {
//   return num * 5;
// }

// multipleBy5.power = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

// function createUser(username, score) {
//   this.username = username;
//   this.score = score;
// }

// createUser.prototype.increment = function () {
//   this.score++;
// };
// createUser.prototype.printMe = function () {
//   console.log(`price is ${this.score}`);
// };

// const chai = new createUser("chai", 25);
// const tea = createUser("tea", 250);

// chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
