function setUserName(userName) {
  console.log("called", userName);
  this.userName = userName;
}

function createUser(userName, email, password) {
  setUserName(userName);
  this.email = email;
  this.password = password;
}

const user1 = new createUser("haha", "@gmail.com", "124");
// here we are not getting our username
console.log(user1); // { email: '@gmail.com', password: '124' }
// problem we are getting is, that the setUserName reference is getting deleted as soon
// it get executes so create user will not get userName in return

// to resolve this we are going to use call

function setUserNameWithCall(userName) {
  console.log("called", userName);
  this.userName = userName;
}

function createUserWithCall(userName, email, password) {
  // the reason we are using this keyword with call here to say that store the userName in my this variable
  // setUserNameWithCall this keyword will get deleted as execution completes
  // so we are attaching the reference in our createUserWithCall
  setUserNameWithCall.call(this, userName);
  this.email = email;
  this.password = password;
}
const userWithCall = new createUserWithCall("haha", "@gmail.com", "124");
console.log(userWithCall);
