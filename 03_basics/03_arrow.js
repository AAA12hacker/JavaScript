const myObj = {
  userName: "abrar",
  price: 90,

  welcomeMessage: function () {
    // here this refers to it's specific object and it can all the variables of it
    // console.log(this);
    return `${this.userName} you are welcome`;
  },
};

// console.log(this);

console.log(myObj.welcomeMessage());
myObj.userName = "hahah";
console.log(myObj.welcomeMessage());
console.log(this); // { it return empty as it doesn't have any global context}

// arrow function

// explicitly return if they are multiple line of code {return output}
// const addNum = (a, b) => {
//   return a + b;
// };

// implicitly return if there is a single line code (output)
const addNum = (a, b) => a + b;
