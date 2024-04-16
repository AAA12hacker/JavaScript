const clock = document.getElementById("clock");
const date = new Date();

// using of set Interval help us to trigger the event after every specified sec
setInterval(() => {
  const date = new Date();
  console.log(date);
  clock.innerHTML = `<span>${date.toLocaleTimeString({
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })}</span>`;
}, 1000);
