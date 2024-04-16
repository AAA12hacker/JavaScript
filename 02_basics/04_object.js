const object1 = new Object();
const obejct11 = {};
// this is the two way to decalre the object
const object = {
  email: "heheheh@gmail.com",
  fullName: {
    userName: {
      firstName: "abrar",
      lastName: "ansari",
    },
  },
};
console.log(object.fullName?.userName.firstName);

// merge two or more object
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
const obj3 = {
  5: "a",
  6: "b",
};

// Object.assign(target,soucre) // syntax
//target=>{}, source=>obj1,obj2,obj3
// {} it is optional but it is best practice too write
// 1st way to merge
const obj = Object.assign({}, obj1, obj2, obj3);
console.log(obj);
// another way to merge
const objSpread = { ...obj1, ...obj2 };
console.log(objSpread);

// most important to use in object to get the key,value, hasOwnProperties, entries
const mySymbl = Symbol("key1");
const myObj = {
  name: "abrar",
  age: 20,
  [mySymbl]: "myKey1",
  email: "abrar@gmail.com",
  "full name": "Abrar ANsari", // sometime it will be declared like this
};
console.log(Object.keys(myObj)); //[ 'name', 'age', 'email', 'full name' ]
console.log(Object.values(myObj)); //[ 'abrar', 20, 'abrar@gmail.com', 'Abrar ANsari' ]
console.log(Object.entries(myObj)); // it will return both key and value as a single array in a array like example
// output
/*[
    [ 'name', 'abrar' ],
    [ 'age', 20 ],
    [ 'email', 'abrar@gmail.com' ],
    [ 'full name', 'Abrar ANsari' ]
  ]
*/

console.log(Object.hasOwnProperty("name")); // true
console.log(Object.hasOwnProperty("fullName")); // false

// destructring concept

const course = {
  instructor: "Abrar",
  place: "saidabad",
};

const { instructor, place: location } = course;
console.log(instructor, location);
