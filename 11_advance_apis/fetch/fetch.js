// this is one way using async and await

// async function fetchLearn() {
//   try {
//     const response = await fetch("https://api.github.com/users/AAA12hacker");
//     //   console.log(response.json()); // it will return the promise to us not a result
//     // reason it return promise because in first await we fetch that data but we need to resolve the response also
//     // we need to convert in json
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error, "e");
//   }
// }

// fetchLearn();

// anotherway to resolve using promises

fetch("https://api.github.com/users/AAA12hacker")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(err));
