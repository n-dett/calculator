let firstNum 
let secondNum
let displayValue = 0;
// let currentOperator = '';
let nextOperator = '';
let total = 0;
let clearDisplay = false;

let operatorBtns = document.querySelectorAll('.operator');
let displayText = document.querySelector('#display-text');
let numBtns = document.querySelectorAll('.num-btn');

selectedNum();
allClear();
operatorIsClicked();

// Run calculation

function calculate(num1, num2, callback) {
    return callback(num1, num2);
}


// Create functions for each of the operations

function addNums(num1, num2) {
  return num1 + num2;
}

function subtractNums(num1, num2) {
  return num1 - num2;
}

function multiplyNums(num1, num2) {
  return num1 * num2;
}

function divideNums(num1, num2) {
  return num1 / num2;
}


// Populate display

function selectedNum() {
  numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', insertDisplayText)
  })
}

function insertDisplayText() {
  if(displayText.innerText == '0') {
    displayText.innerText = '';
  }
  if(displayText.innerText.length <= 9){
    if(clearDisplay === true) {
      displayText.innerText = '';
      clearDisplay = false;
    }
    displayText.innerText += this.value;
  }
  updateDisplayValue();
  console.log(displayValue, 'display value');
}

function updateDisplayValue() {
  displayValue = Number(displayText.innerText);
}


// All clear button

function allClear() {
  let acBtn = document.querySelector('#ac-btn');
  acBtn.addEventListener('click', () => displayText.innerText = '0')
  displayValue = 0;
  total = 0;
}

// Operation functionality
function operatorIsClicked() {
  let containerDiv = document.querySelector('#calc-container');
  containerDiv.addEventListener('click', (e) => {
    const target = e.target;
    if(target.className === 'operator') {
      let currentOperator = target.id;
      console.log(currentOperator, 'currentOperator');
      assignNumberValues();
      clearDisplay = true;
    }
  })
}



// Assign number values
function assignNumberValues() {
  if(!isNaN(firstNum)) {
    secondNum = displayValue;
  } else {
    firstNum = displayValue;
  }
  console.log(firstNum, 'firstNum');
  console.log(secondNum, 'secondNum');
}


function assignOperatorValues() {
  if(operator) {
    nextOperator = btn.value;
  }
}



// When operator is clicked, store first number and store operator
// Enter second number
// Operator/equals is clicked, store second number and calculate
// previousOperator
// currentOperator
// if previousOperator == ' ' then currentOperator == this.value;

// When operator is clicked, next numbers are not appended to current, display is cleared
// if(firstNum)