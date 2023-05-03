let firstNum
let operator
let secondNum

// Operation
function operate(num1, num2, callback) {
    return callback(num1, num2);
}

// Create functions for add, subtract, multiply, and divide

// Add
function add(num1, num2) {
  return num1 + num2;
}

// Subtract
function subtract(num1, num2) {
  return num1 - num2;
}

// Multiply
function multiply(num1, num2) {
  return num1 * num2;
}

// Divide
function divide(num1, num2) {
  return num1 / num2;
}


// Populate display
// let displayValue
let displayText = document.querySelector('#display-text');
let numBtns = document.querySelectorAll('.num-btn');

function selectedNum() {
  numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', insertDisplayText)
  })
}

function insertDisplayText() {
  if(displayText.innerText == '0'){
    displayText.innerText = '';
  }
  displayText.innerText += this.value;
}

selectedNum();


// All clear button
function allClear() {
  let acBtn = document.querySelector('#ac-btn');
  acBtn.addEventListener('click', () => displayText.innerText = '0')
}

allClear();