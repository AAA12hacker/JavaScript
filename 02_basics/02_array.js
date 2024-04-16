const marvel_heroes = ["spiderman", "ironMan", "hulk"];

const dc_heroes = ["batman", "superMan", "flash"];
// not the correct way to merge
// marvel_heroes.push(dc_heroes);
// it will return this as output=>dc_heroes will be at index 3
//["spiderman", "ironMan", "hulk", ["batman", "superMan", "flash"]];
// console.log(marvel_heroes);
// if you want to access "flash"
// console.log(marvel_heroes[3][2]); // return flash

// to merge two array we can use concat
let allHeroes = marvel_heroes.concat(dc_heroes); // it is will return new array so need to store in variable
console.log(allHeroes);
// another better approach we can use
let all_heroes_with_spread_operator = [...marvel_heroes, ...dc_heroes];
console.log(all_heroes_with_spread_operator);

// we can use concat and spread both no difference just it increase the readibility

// to identify is the value is array or not
console.log(Array.isArray("hitesth")); // return false
console.log(Array.isArray(all_heroes_with_spread_operator)); //return true
console.log(Array.from("hitesh")); // return array object of hitesh=>[ 'h', 'i', 't', 'e', 's', 'h' ]
const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score1, score2, score3)); // it return array with set of elemts=>[ 100, 200, 300 ]
