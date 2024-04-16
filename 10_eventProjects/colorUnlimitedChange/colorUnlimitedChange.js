function randomColorGenerate() {
  // hexa value
  const hex = "0123456ABCDE";
  let randomColor = "#";
  //   writing 6 because color will have 6char
  for (let i = 0; i < 6; i++) {
    randomColor += hex[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}
let intervalId;
function startColorChange() {
  console.log("haha");
  function changeBgColor() {
    document.body.style.backgroundColor = randomColorGenerate();
  }
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 100);
  }
}

function stopColorChange() {
  clearInterval(intervalId);
  intervalId = null;
}

document.querySelector("#start").addEventListener("click", function () {
  startColorChange();
});
document.querySelector("#stop").addEventListener("click", function () {
  stopColorChange();
});
