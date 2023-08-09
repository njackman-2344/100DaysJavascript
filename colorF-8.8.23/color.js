function flip() {
  const yellow = document.getElementsByClassName("yellow");
  const blue = document.getElementsByClassName("blue");
  const black = document.getElementsByClassName("black");
  const green = document.getElementsByClassName("green");
  const btnElement = document.getElementById("btn");

  yellow.addEventListener("click", () => {
    yellow.style.backgroundColor = "yellow";
  });
  blue.addEventListener("click", () => {
    blue.style.backgroundColor = "blue";
  });
  black.addEventListener("click", () => {
    black.style.backgroundColor = "black";
  });
  green.addEventListener("click", () => {
    green.style.backgroundColor = "green";
  });
}
btnElement.addEventListener("click", flip());
