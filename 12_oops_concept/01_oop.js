// object literal

const user1 = {
  name: "abrar",
  email: "abbr",
  getUserName: function () {
    // this refer to it's specific instance
    return `this is a userName for this instance ${this.name}`;
  },
};
console.log(user1.getUserName());

// construct function
function USER(userName, email) {
  // here this.userName is
  this.userName = userName;
  this.email = email;
  return this;
}

// const user12 = USER("abbrr", "@gmail.com");

// console.log(user12); // here we get complete data which we pass
// const user13 = USER("hahaah", "hahahah@gmail.com");
// // now let's console again the user12
// console.log(user12); // here user12 got override with user13

// so here we introduce new key word
// so here with the help of new keyword we can make multiple instance for every object

const user12e = new USER("abbrr", "@gmail.com");
const user13e = new USER("hahaah", "hahahah@gmail.com");
console.log(user12e); // it also doesn't over ride the value because we have made a new instance
