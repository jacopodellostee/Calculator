import "../styles/style.css";

document.addEventListener("DOMContentLoaded", () => {
    
  let compiteNumber: string = ""; 

  let firstNumber: number;

  let secondNumber: number;   

  let operator: string;      

  // Takes The Number In Input
  const numbers = document.querySelectorAll(".number");
  
  numbers.forEach((numberButton) => {

    numberButton.addEventListener("click", () => {

      let value: string = (numberButton as HTMLButtonElement).value;

      compiteNumber += value;

    });

  });

  // Takes The Operator In Input
  const operatorButtons = document.querySelectorAll(".operator button");

  operatorButtons.forEach((opButton) => {

    opButton.addEventListener("click", () => {

      operator = (opButton as HTMLButtonElement).value;

      firstNumber = Number(compiteNumber);     

      compiteNumber = "";

    });

  });

  const resultButton = document.querySelector("#calculateResult");

  if (resultButton) {

    resultButton.addEventListener("click", () => {

      secondNumber = Number(compiteNumber);

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

      // Calculate The Result
      const resultDiv = document.querySelector(".result");

      if (resultDiv) {
        resultDiv.textContent = `${result}`;
      }

      compiteNumber = "";

      operator = "";

    });
  }
});
