let firstNum 
let secondNum
let displayValue = 0;
let operator = '';
let nextOperator = '';
let total;
let clearDisplay = false;
let operatorClicked = false;
// let isEqualsClicked = false;

let operatorBtns = document.querySelectorAll('.operator');
let displayText = document.querySelector('#display-text');
let numBtns = document.querySelectorAll('.num-btn');

selectedNum();
allClear();
operatorIsClicked();
// equalsBtnClick();


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
  operatorClicked = false;
  console.log(displayValue, 'display value');
}

function updateDisplayValue() {
  displayValue = Number(displayText.innerText);
}


// All clear button

function allClear() {
  let acBtn = document.querySelector('#ac-btn');
  acBtn.addEventListener('click', () => {
    displayText.innerText = '0'
    displayValue = 0;
    total = 0;
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    nextOperator = undefined;
  })
 
}

// Operation functionality
function operatorIsClicked() {
  let containerDiv = document.querySelector('#calc-container');
  containerDiv.addEventListener('click', (e) => {
    const target = e.target;
    if(target.className === 'operator') {
      if(operatorClicked) {
        assignOperatorValues(target);
        return;
      } else {
        assignNumberValues();
        assignOperatorValues(target);
        clearDisplay = true;
        operatorClicked = true;

          if(!isNaN(secondNum) && operator) {
            runEquation(); 
          }
      }
    }                
  })
}



// Assign number values
// EDIT THIS ///////////////////////////////////////
function assignNumberValues() {
  if(!isNaN(firstNum)) {
    secondNum = displayValue;
  } else {
    firstNum = displayValue;
  }
  if(total) {
    firstNum = total;
  }
  console.log(firstNum, 'firstNum');
  console.log(secondNum, 'secondNum');
}


function assignOperatorValues(target) {
      operator = nextOperator;
      nextOperator = window[target.value];
  
  
// Operator = nextOperator, unless operator and nextOperator are undefined

  console.log(operator, 'operator');
  console.log(nextOperator, 'nextOperator');
}


function runEquation() {
  total = calculate(firstNum, secondNum, operator);
  console.log(total, 'total');
  displayText.innerText = total;
  firstNum = total;
}



// function equalsBtnClick() {
//   let equalsBtn = document.querySelector('#equals-btn');
//   equalsBtn.addEventListener('click', () => isEqualsClicked = true)
// }

// TO DO
// Make equation run if equals is clicked more than once

// Allow negative numbers

// When two operators are clicked in a row (no number),
// how to store only the second operator? (firstNum is being stored as secondNum currently)

// Change font size at different numbers of digits, add error if number gets too long