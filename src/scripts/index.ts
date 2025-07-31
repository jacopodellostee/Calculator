import "../styles/style.css";

document.addEventListener("DOMContentLoaded", () => {

  const display = document.querySelector(".result");

  const reset = document.querySelector("#reset");
    
  let compiteNumber: string = ""; 

  let firstNumber: number;

  let secondNumber: number;   

  let operator: string;      

  // Takes The Number In Input
  const numbers = document.querySelectorAll(".number");

  if (!display) 
    return;
  
  numbers.forEach((numberButton) => {

    numberButton.addEventListener("click", () => {

      let value: string = (numberButton as HTMLButtonElement).value;

      compiteNumber += value;

      display.textContent = compiteNumber;

    });

  });

  // Takes The Operator In Input
  const operatorButtons = document.querySelectorAll(".operator");

  operatorButtons.forEach((opButton) => {

    opButton.addEventListener("click", () => {

      operator = (opButton as HTMLButtonElement).value;

      firstNumber = Number(compiteNumber);     

      compiteNumber = "";

      display.textContent = operator;

    });

  });

  const resultButton = document.querySelector("#calculateResult");

  if (resultButton) {

    resultButton.addEventListener("click", () => {

      secondNumber = Number(compiteNumber);

      display.textContent = secondNumber.toString();
      
      let result: number;

      switch (operator) {

        case "+":
          result = firstNumber + secondNumber;
          break;

        case "-":
          result = firstNumber - secondNumber;
          break;

        case "*":
          result = firstNumber * secondNumber;
          break;

        case "/":
          result = secondNumber !== 0 ? firstNumber / secondNumber : NaN;
          break;

        default:
          result = NaN;
          break;
      }

      display.textContent = `${result}`;

      compiteNumber = "";

      operator = "";

    });

    if(!reset) return;

    reset.addEventListener("click", () => {
        firstNumber = secondNumber = NaN;

        compiteNumber = "";

        operator = "";

        display.textContent = "";
    });
  }
});
