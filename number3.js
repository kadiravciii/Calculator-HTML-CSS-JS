
let num1 = '';
let num2 = '';
let operator = '';
let result = '';


const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');


buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerText;

    
    if (!isNaN(buttonText) || buttonText === '.') {
     
      if (operator === '') {
        num1 += buttonText;
        display.innerText = num1;
      } else {
        num2 += buttonText;
        display.innerText = num2;
      }
    } else if (buttonText === 'C') { 
      num1 = '';
      num2 = '';
      operator = '';
      result = '';
      display.innerText = '0';
    } else if (buttonText === '+/-') { 
      if (operator === '') {
        num1 = -parseFloat(num1);
        display.innerText = num1;
      } else {
        num2 = -parseFloat(num2);
        display.innerText = num2;
      }
    } else if (buttonText === '%') { 
      if (operator === '') {
        num1 = parseFloat(num1) / 100;
        display.innerText = num1;
      } else {
        num2 = parseFloat(num2) / 100;
        display.innerText = num2;
      }
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') { 
      operator = buttonText;
      display.innerText = '0';
    } else if (buttonText === '=') { 
      
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
      
     
      display.innerText = result;
      
     
      num1 = '';
      num2 = '';
      operator = '';
      result = '';
    }
    
  });
});
