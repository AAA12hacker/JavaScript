// one way of decalring string
const name = "hitesh";

// other way of declaring strings

const nameString = new String(name);
console.log({ nameString, name });

// properties;
console.log(name.length, nameString.length);
// methods:

console.log(name.toLowerCase(), nameString.toUpperCase());
// charAt will return the character of the specific index
console.log(nameString.charAt(2));
// indexOf will return the index of specific character
console.log(nameString.indexOf("r"));
// include return true or false if the value contains
console.log(nameString.includes("abrar"));
// subString give the value to us from the specific point to specific end point,
// we cannot give the negative value here
console.log(nameString.substring(0, 4));
// slice give the value to us from the specific start point to specific end point
// we can give the negative value here
console.log(nameString.slice(-6, 4));

const str = "Hello, world!";

console.log(str.slice(0, 5)); // Output: "Hello"
console.log(str.substring(0, 5)); // Output: "Hello"

console.log(str.slice(-6)); // Output: "world!"
console.log(str.substring(-6)); // Output: "Hello" (treated as substring(0))

console.log(str.slice(7)); // Output: "world!"
console.log(str.substring(7)); // Output: "world!"

console.log(str.slice(7, -1)); // Output: "world"
console.log(str.substring(7, -1)); // Output: "Hello" (treated as substring(0, 0))
// using trim concept
const stringTrim = "     hitesh    ";
console.log(stringTrim);
console.log(stringTrim.trim());
console.log(stringTrim.trimStart());
console.log(stringTrim.trimEnd());

const url = "https://localhost:3000/hello%20World";
console.log(url.replace("%20", "-"));

const stringToGetArrayWithSplit = "abrar-hello-world";
console.log(stringToGetArrayWithSplit.split("-"));
console.log(stringToGetArrayWithSplit.concat("-hero"));
console.log(stringToGetArrayWithSplit.startsWith("abrar"));
console.log(stringToGetArrayWithSplit.endsWith("l"));
