// for in
// it is mostly used on objects

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

//"for in" applied on objects, it will give us key
//and with the help of key we can access the object property
for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];
// in case of array, it implies on array, and we using for in, here key defines index,
// as every value has a unique key
for (const key in programming) {
  //   console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");
// it doesn't work on maps object
for (const key in map) {
  console.log(key);
}
