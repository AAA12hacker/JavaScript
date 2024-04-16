// object Singleton
//Object.create();

// object literal
const mySymbl = Symbol("key1");
// if you are using symbol in object we need to represent it this way [mySymbl]
const myObj = {
  name: "abrar",
  age: 20,
  [mySymbl]: "myKey1",
  email: "abrar@gmail.com",
  "full name": "Abrar ANsari", // sometime it will be declared like this
};
// this is one way to access
console.log(myObj.name);
// another way and it's a best practice
console.log(myObj["email"]);
// if the key is wriiten in this format "full name" then we can only access by 2nd way
console.log(myObj["full name"]);
console.log(myObj[mySymbl]);
console.log(myObj);
// update the val
myObj.email = "hitest@gmail.com";
myObj.power = "coding";

console.log(myObj);
// this statement not let the object update after executaion
// Object.freeze(myObj);
// myObj.email = "hite";
myObj.greeting = function () {
  console.log("exexute");
};
myObj.greeting2 = function () {
  // too reference from the object so we can use "this" keyword
  console.log(`this is user name ${this.name}`);
  return "he";
};
console.log(myObj);

console.log(myObj["greeting"]());
console.log(myObj.greeting2());
