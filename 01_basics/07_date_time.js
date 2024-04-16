const date = new Date();
// formats of date
console.log(date); //it will be in ISO string
console.log(date.toDateString());
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toLocaleString());

console.log(typeof date);
// to get date, month, year, day
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getTime());

// create date to pass as params
const createDate = new Date(2023, 0, 2);
console.log(createDate.toLocaleString());
// with time
const createDateTime = new Date(2023, 0, 2, 5, 10, 20);
console.log(createDateTime.toLocaleString());

// timestamps
const timeStampDate = Date.now(); // it return the date in time format
console.log(timeStampDate);
// so if you want to convert any date you need to use  getTime method
console.log(new Date().getTime());
// if you want to convert the date in secs
console.log(timeStampDate / 1000); // it will convert the string in secs but we need to round as its decimal
console.log(Math.round(timeStampDate / 1000));

const dates = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Request a weekday along with a long date
console.log(
  new Date().toLocaleString("en-IN", {
    timeStyle: "full",
    timeZone: "UTC",
  })
);
