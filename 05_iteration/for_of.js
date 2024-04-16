// for of
// no need to define index, or length...this is done mostly on arr, or map object, or string

// ["", "", ""]
// to do on this type of iteration we can use foreach,map
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

// to print number
for (const num of arr) {
  console.log(num);
}

// to print string " will have length"
const greetings = "Hello world!";
for (const greet of greetings) {
  //   console.log(`Each char is ${greet}`);
}

// Maps
// this is the declaration of map object
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India"); // this will not get added as map will contain only unqiue keys
// and also order will be same

// console.log(map);

// to iterate on map structure we can use for of.
// here we are
for (const key of map) {
  //   console.log(key);
  //   here we will get like this output
  /* [ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]*/
}
// so to get the key and value separate we will destructure the array
for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};
// "for of" cannot be applied on the objects, so we need to use for in
for (const [key, value] of myObject) {
  console.log(key, ":-", value);
}
