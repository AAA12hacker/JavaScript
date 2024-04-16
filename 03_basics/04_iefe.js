//iife is used in this way
//()()  in first bracket our function is written, and in second it is executed
// we don't need to call the func to execute it can execute immediately as it get trigggered
// in this we can have named iife or anonymus iife

// named iife
(function greet() {
  console.log("hello");
})();
// anonymus iife
(() => {
  console.log("arrow");
})();
(function () {
  console.log("anonymus");
})();

// it's main use is it can have a private variable which can be accessed globally
// basically it encapsulate
// it doesn't pollute global

// example for private variable and encapsulation
var count = 15;
const privateEncap = (function () {
  var count = 0;
  function increment() {
    return count++;
  }
  console.log(count, "inside iife");
  const decrement = () => {
    return count--;
  };
  return {
    increment: increment,
    decrement: decrement,
    getResult: function () {
      return count;
    },
  };
})();
console.log(count, "outside iife");
// privateEncap.increment();
// privateEncap.increment();
// console.log(privateEncap.getResult());
// privateEncap.decrement();
// console.log(privateEncap.getResult());
console.log(privateEncap.count); // it gives us undefined as it is a private variable in our privateEncap func

var counts = 10;
const normalFunc = function () {
  var counts = 0;
  function increment() {
    return counts++;
  }
  console.log(counts, "inside");
  const decrement = () => {
    return counts--;
  };
  return {
    increment: increment,
    decrement: decrement,
    getResult: function () {
      return counts;
    },
  };
};
const instance = normalFunc();
// the reason we are storing the function in variable because it should first execute
// then we can use it's property
// if we are writing normalFunc().increment() it will always create new instance for every execution
console.log(counts, "outside");
instance.increment();
instance.increment();
console.log(instance.getResult());
console.log(instance.counts);
