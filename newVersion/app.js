// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const message = document.querySelector(".message");

btn.addEventListener("click", function () {
  // console.log(randomNumber);
  message.innerHTML = "";
  const color_input = document.querySelector(".color_input").value;
  //checks if there is a value on the input field
  if (color_input) {
    if (isColor(color_input)) {
      document.body.style.backgroundColor = color_input;
      color.textContent = color_input;
    } else {
      let h4 = document.createElement("h4");
      h4.prepend(
        `"${color_input}" is not a valid value. You must enter a valid color`
      );
      message.prepend(h4);
      getRandomColor();
    }
  } else {
    getRandomColor();
  }
});

//generates a rgb color using getRandomNumber
const getRandomColor = () => {
  const randomNumber = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
  document.body.style.backgroundColor = randomNumber;
  color.textContent = randomNumber;
};

//generates a random number from 0 to 255
function getRandomNumber() {
  let rNumber = Math.floor(Math.random() * 256);
  // console.log(rNumber);
  return rNumber;
}
//cheks if the value given is a accepted value as a color
//e.g.: red == true, reds == false. It works for hex and rgb too
const isColor = (strColor) => {
  var el = new Option().style;
  // console.log(s);
  el.color = strColor;
  return el.color == strColor;
};
