// in this it does't print the value "execute"=> so we will achieve this in promiseTwo

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("working");
  }, 1000);
});

promiseOne.then(() => {
  console.log("execute");
});

// we need to resolve the promise to get the result of promise
const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("working 1");
    resolve();
  }, 1000);
});

promiseTwo.then(() => {
  console.log("execute 1");
});

// we don't need to store in variable it worked properly promiseThree
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("working 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("execution 2");
});

// now let's see the case of rejection with storing the refrence in a variable and without
// both works in same case
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const error = true;
    if (!error) {
      console.log("working 4");
      resolve();
    } else {
      console.log("enter in error block it get rejected");
      reject();
    }
  }, 1000);
});

promiseFour
  .then(() => {
    console.log("error worked");
  })
  .catch((error) => {
    console.log("error occur");
  });

// now for without variable
new Promise(function (resolve, reject) {
  setTimeout(() => {
    const error = true;
    if (!error) {
      console.log("working 5");
      resolve();
    } else {
      console.log("enter in error block in non variable");
      reject();
    }
  }, 1000);
})
  .then(() => {
    console.log("resolved");
  })
  .catch(() => {
    console.log("error occured in non variable");
  });

// promise 5 with data as a response

const promiseFive = new Promise(function (resolve, reject) {
  const error = false;
  if (!error) {
    console.log("working 5");
    resolve({ name: "Abrar", email: "hello@gmail.com" });
  } else {
    console.log("enter in error block it get rejected");
    reject();
  }
});

// you cannot refer the promise in a variable. if you are refering then you need to resolve in again
// const respons = promiseFive
//   .then((response) => {
//     return response;
//   })
//   .catch(() => {
//     console.log("error occured again in params");
//   });

// console.log(respons, "hahah"); //Promise { <pending> }
// console.log(
//   "hihi",
//   respons.then((user) => {
//     console.log(user);
//   })
// );

// to avoid this we can use nested then chaining
promiseFive
  .then((response) => {
    return response.name;
  })
  .then((userName) => {
    console.log(userName); // abrar
  })
  .catch(() => {
    console.log("error occured again in params");
  })
  .finally(() => {
    console.log(
      "promise is either resolved or rejected but i am getting executed"
    );
  });
