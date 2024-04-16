const myArr = [1, 2, 3, 4, 5];
// methods and properites
console.log(myArr);
console.log(myArr.length);
console.log(typeof myArr);

// methods

// push and pop
myArr.push(10); // add in last
myArr.push(30);
console.log(myArr);
myArr.pop(); // remove last element
console.log(myArr);

// unshift and shift

myArr.unshift(20); // add at 1st element by shifting the element
console.log(myArr);
myArr.shift(); // remove the first elemet of the array
console.log(myArr);
// myArr.shift();
console.log(myArr);
// includes => to return true if contains,
// [ 1, 2, 3, 4, 5, 10 ]
console.log(myArr.includes(2)); // true
console.log(myArr.includes(20)); // false

// indexOf=> return the index of the element or else return -1
//[ 1, 2, 3, 4, 5, 10 ]
console.log(myArr.indexOf(2)); //1
console.log(myArr.indexOf(20)); // -1

// join property => converts and array  to string and seprate with ,
const newArrJoin = myArr.join();
console.log(newArrJoin);
const newArrToArr = newArrJoin.split(",");
console.log(newArrToArr, "split");
console.log(myArr);
console.log(newArrJoin);
console.log(typeof newArrJoin);
console.log(newArrToArr);
console.log(typeof newArrToArr);

// slice and splice

// Slice=> if are using slice it will not update the orinal array, and it does not include end point index
const newArr = [1, 2, 3, 4, 5, 6, 7, 10];
console.log("a ", newArr);
const sliceArr = newArr.slice(1, 4); // it does not include end point index
console.log("b ", sliceArr);
console.log("c original array ", newArr);

// Splice => it modifies the original array by removing the elements of provided start to end index
// it does include end point index

const newArr2 = [1, 2, 3, 4, 5, 6, 7, 10];
console.log("a ", newArr2);
const spliceArr = newArr2.splice(1, 4); // it does not include end point index
console.log("b ", spliceArr);
console.log("c original array ", newArr2);
