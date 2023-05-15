let firstNum 
let secondNum
let displayValue = 0;
let operator = '';
let nextOperator = '';
let total = 0;
let clearDisplay = false;

let operatorBtns = document.querySelectorAll('.operator');
let displayText = document.querySelector('#display-text');
let numBtns = document.querySelectorAll('.num-btn');

selectedNum();
allClear();
operatorIsClicked();
equalsButtonIsClicked();

// Run calculation

function calculate(num1, num2, callback) {
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
      assignNumberValues();
      assignOperatorValues(target);
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


function assignOperatorValues(target) {
  if(operator && nextOperator) {
    operator = nextOperator;
    nextOperator = window [target.value];
  } else if(operator) {
    nextOperator = window[target.value];
  } else {
    operator = window[target.value];
  }
  console.log(operator, 'operator');
  console.log(nextOperator, 'nextOperator');
}


function equalsButtonIsClicked() {
  const equalsbtn = document.querySelector('#equals-btn');
  equalsbtn.addEventListener('click', () => {
    assignNumberValues();
    runEquation();
    if(nextOperator) {
      operator = nextOperator;
    }
    nextOperator = '';
  })
}

function runEquation() {
  total = calculate(firstNum, secondNum, operator);
  console.log(total, 'total');
  displayText.innerText = total;
  firstNum = total;
  secondNum = 0;
}



// When two operators are clicked in a row (no number),
// how to store only the second operator?