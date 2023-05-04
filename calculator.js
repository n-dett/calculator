let firstNum
let operator
let secondNum

// Operation
function operate(num1, num2, callback) {
    return callback(num1, num2);
}

// Create functions for each of the operations

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}


// Populate display

let displayText = document.querySelector('#display-text');
let numBtns = document.querySelectorAll('.num-btn');
let displayValue = 0;

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
  updateDisplayValue();
}

function updateDisplayValue() {
  displayValue = Number(displayText.innerText);
  console.log(displayValue);
}

function maxTenNums() {
  if(displayText.length > 9) {
    numBtn.removeEventListener('click', insertDisplayText)
  }
}

maxTenNums();
selectedNum();



// All clear button
function allClear() {
  let acBtn = document.querySelector('#ac-btn');
  acBtn.addEventListener('click', () => displayText.innerText = '0')
}

allClear();