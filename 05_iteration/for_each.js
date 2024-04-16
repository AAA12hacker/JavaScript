const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// directly we can pass our function as a reference in foreach
// coding.forEach(printMe)

// this are the parameters will be there in foreach
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");
// we can use foreach on map objects or "for of" by destrucing the array"
map.forEach((value, key) => console.log(`${key} :- ${value}`));
// for (const key in map) {
//   console.log(key);
// }
