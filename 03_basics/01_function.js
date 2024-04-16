function myName() {
  console.log("abrar");
}
myName();
// here we are creating parameters
function addTwoNumber(number1, number2) {
  //   const result = number1 + number2;
  //   return result;
  return number1 + number2;
}
// here we are passing arguments
const result = addTwoNumber(1, 2);
console.log(result);

function myUserLoggedMessage(userName = "sam") {
  // this will execute if the user doesn't enter the username
  if (!userName) {
    console.log("enter the userName");
    return;
  }
  return `${userName} welcome`;
}
const successFullMessage = myUserLoggedMessage();
console.log(successFullMessage);

// when you don't know how many arguments are we going to pass in the func
function myTotalFunc(num1) {
  return num1;
}
console.log(myTotalFunc(200)); // it will give output 200
console.log(myTotalFunc(200, 300, 400)); // it will also give output 200 as we are having one parameter
// to handle this type of cases we are going to use "restOperator" in parameter
// restOperator=> it is used to take all the remanining argument in array and return
function myTotalFuncWithRestOperator(...num1) {
  return num1;
}
console.log(myTotalFuncWithRestOperator(200, 300, 400)); //[ 200, 300, 400 ]
function myTotalFuncWithRestOperatorWithExtraParam(val1, ...num1) {
  // it will consider val1=>200 from this input (200, 300, 400, 800)
  return num1;
}
console.log(myTotalFuncWithRestOperatorWithExtraParam(200, 300, 400, 800)); //[ 300, 400, 800 ]

// for object
const user = {
  userName: "hahaah",
  price: 200,
};
function myObjFunc(anyObject) {
  console.log(`${anyObject.userName} is name and price is ${anyObject.price}`);
}
myObjFunc(user);
myObjFunc({ userName: "bye", price: 400 });
const nameArray = ["abrar", "hyd"];
function myArraySecondNumber(anyArray) {
  console.log(anyArray[1]);
}
myArraySecondNumber(nameArray);
myArraySecondNumber(["1", "2", "3"]);
