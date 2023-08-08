let arr = [
  "No",
  "Yes",
  "Without a doubt",
  "Outlook: Good",
  "You may rely on it",
];
function shake() {
  const btn = document.getElementById("btn");
  let arrIndex = 0;
  var random = Math.random();
  var randomNum = Math.floor(random * arr);
  const al = () => {
    alert(arr[arrIndex]);
    if (arrIndex >= arr.length) {
      arrIndex = 0;
    }
  };

  btn.addEventListener("click", al);
}
shake();
