document.addEventListener("DOMContentLoaded", function () {
  const dwellElements = document.getElementsByClassName("dwell");
  const outputElement = document.getElementById("outputParagraph");

  for (let i = 0; i < dwellElements.length; i++) {
    dwellElements[i].addEventListener("change", () => {
      let selectedValue = dwellElements[i].value;
      outputElement.textContent = ".dwell " + selectedValue;
    });
  }

  submit(); // Call the submit function after DOM is loaded
});
