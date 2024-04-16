// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

// previously we used to set the another prototype in this way
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  // what actually __proto__ does is it inherits all the teachingSupport in TASUppport
  // now TASupport have all the methods and properties which are used in TeachingSupport
  __proto__: TeachingSupport,
};
// or previously we used to set the another prototype in this way
Teacher.__proto__ = User;
// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(TeachingSupport);

// another example

const TeachingSupport1 = {
  // Properties and methods of TeachingSupport
  supportType: "Tutoring",
  level: "Intermediate",
  getSupportType() {
    return this.supportType;
  },
};

const TASupport1 = {
  // Properties and methods specific to TASupport
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport1, // Setting prototype to TeachingSupport
};

// Accessing properties and methods of TeachingSupport from TASupport
console.log(TASupport1.supportType); // Output: "Tutoring"
console.log(TASupport1.level); // Output: "Intermediate"
console.log(TASupport1.getSupportType()); // Output: "Tutoring"
