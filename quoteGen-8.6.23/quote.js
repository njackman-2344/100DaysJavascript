const quotes = [
  `Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes. -Jack Handey`,
  `I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with ’em later. — Mitch Hedberg`,
];
function submit() {
  const outputElement = document.getElementById("output").textContent;
  let quoteIndex = 0;

  //updating quotes
  outputElement.textContent = quotes[quoteIndex];

  //defining button
  const button = document.getElementById("btn");

  button.addEventListener("click", () => {
    quoteIndex++; //increment
    if (quoteIndex >= quotes.length) {
      quoteIndex = 0; //setting back to 0
    }

    outputElement.textContent = quotes[quoteIndex];
  });
  console.log(outputElement);
}
