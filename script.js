const display = document.querySelector(".retangulo");
const buttons = document.querySelectorAll(".botao, .amal, .amal1");

let currentInput = "";
let previousInput = "";
let operation = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value >= "0" && value <= "9") {
      if (currentInput.length < 10) {
        currentInput += value;
        display.textContent = currentInput;
      }
    } else if (value.toLowerCase() === "c") {
      currentInput = "";
      previousInput = "";
      operation = null;
      display.textContent = "";
    } else if (value === "=") {
      if (currentInput !== "" && previousInput !== "" && operation !== null) {
        currentInput = calculate(previousInput, currentInput, operation);
        display.textContent = currentInput;
        previousInput = "";
        operation = null;
      }
    } else {
      if (currentInput !== "") {
        if (previousInput === "") {
          previousInput = currentInput;
          currentInput = "";
        }
        operation = value;
      }
    }
  });
});

function calculate(a, b, op) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);
  switch (op) {
    case "+":
      return (numA + numB).toString();
    case "-":
      return (numA - numB).toString();
    case "X":
      return (numA * numB).toString();
    case "/":
      return (numA / numB).toString();
    default:
      return "";
  }
}
