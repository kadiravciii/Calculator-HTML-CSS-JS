// Declare variables to hold values
let num1 = '';
let num2 = '';
let operator = '';
let result = '';

// Get all calculator buttons and display screen element
const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerText;

    // If the button is a number
    if (!isNaN(buttonText) || buttonText === '.') {
      // If operator is not set, add to num1, else add to num2
      if (operator === '') {
        num1 += buttonText;
        display.innerText = num1;
      } else {
        num2 += buttonText;
        display.innerText = num2;
      }
    } else if (buttonText === 'C') { // If clear button is clicked
      num1 = '';
      num2 = '';
      operator = '';
      result = '';
      display.innerText = '0';
    } else if (buttonText === '+/-') { // If sign button is clicked
      if (operator === '') {
        num1 = -parseFloat(num1);
        display.innerText = num1;
      } else {
        num2 = -parseFloat(num2);
        display.innerText = num2;
      }
    } else if (buttonText === '%') { // If percentage button is clicked
      if (operator === '') {
        num1 = parseFloat(num1) / 100;
        display.innerText = num1;
      } else {
        num2 = parseFloat(num2) / 100;
        display.innerText = num2;
      }
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') { // If operator button is clicked
      operator = buttonText;
      display.innerText = '0';
    } else if (buttonText === '=') { // If equals button is clicked
      // Calculate result based on operator
      switch(operator) {
        case '+':
          result = parseFloat(num1) + parseFloat(num2);
          break;
        case '-':
          result = parseFloat(num1) - parseFloat(num2);
          break;
        case '*':
          result = parseFloat(num1) * parseFloat(num2);
          break;
        case '/':
          result = parseFloat(num1) / parseFloat(num2);
          break;
      }
      
      // Set display to result
      display.innerText = result;
      
      // Reset variables
      num1 = '';
      num2 = '';
      operator = '';
      result = '';
    }
    
  });
});
