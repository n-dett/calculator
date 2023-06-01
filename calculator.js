let firstNum 
let secondNum
let displayValue = 0;
let operator = '';
let nextOperator = '';
let total;
let clearDisplay = false;
let operatorClicked = false;
let isEqualsClicked = false;
let currentBtn;
let lastBtn;

let operatorBtns = document.querySelectorAll('.operator');
let displayText = document.querySelector('#display-text');
let numBtns = document.querySelectorAll('.num-btn');
let containerDiv = document.querySelector('#calc-container');

plusMinusBtnClick();
selectedNum();
allClear();
operatorIsClicked();
whichBtnClicked();
startNewEquation();
decimalButton();
clearEntry();


// Calculation functions

function calculate(num1, num2, callback) {
  return callback(num1, num2);
  
}

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
  isEqualsClicked = false;
  console.log(displayValue, 'display value');
}

function updateDisplayValue() {
  displayValue = Number(displayText.innerText);
}





// Operator functionality

function operatorIsClicked() {
  containerDiv.addEventListener('click', (e) => {
    console.log(currentBtn, 'current btn');
    console.log(lastBtn, 'last btn');
    const target = e.target;
    if(target.className === 'operator') {
      whenOperatorIsClicked(target);
    } 
  })                
}

function whenOperatorIsClicked(target) {
  if(currentBtn === 'equals' && lastBtn === 'equals') {
    runEquation();
  } else if(operatorClicked) {
      assignOperatorValues(target);
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


// Assign number values and operators

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

  console.log(operator, 'operator');
  console.log(nextOperator, 'nextOperator');
}


// Run calculation and display total

function runEquation() {
  total = calculate(firstNum, secondNum, operator);
  total = +total.toFixed(8);
  console.log(total, 'total');
  displayText.innerText = total;
  updateDisplayValue();
  firstNum = total;
}

function whichBtnClicked() {
  let buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if(currentBtn) {
      lastBtn = currentBtn;
      } 
      currentBtn = button.value;
    })
  })  
}    


function startNewEquation() {
  containerDiv.addEventListener('click', (e) => {
    if(!isNaN(currentBtn) && lastBtn === 'equals') {
      let target = e.target;
      displayText.innerText = target.value;
      updateDisplayValue();
      firstNum = undefined;
      total = undefined;
      assignNumberValues();
    }
  })
}


// Plus/minus button

function plusMinusBtnClick() {
  let plusMinusBtn = document.querySelector('#plus-minus-btn');
  plusMinusBtn.addEventListener('click', () => {
    displayValue *= -1;
    displayText.innerText = displayValue;
    if(currentBtn === 'equals') {
      total = displayValue;
    }
  })
}


// Decimal button

function decimalButton() {
  let decimalBtn = document.querySelector('#decimal-btn');
  decimalBtn.addEventListener('click', () => {
    if(displayText.innerText.includes('.')){
      return;
    } else {
      displayText.innerText += '.';
    }
  })
}


// AC button

function allClear() {
  let acBtn = document.querySelector('#ac-btn');
  acBtn.addEventListener('click', () => {
    displayText.innerText = '0'
    updateDisplayValue();
    total = 0;
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    nextOperator = undefined;
  })
 
}


// C button

function clearEntry() {
  let clearEntryBtn = document.querySelector('#ce-btn');
  clearEntryBtn.addEventListener('click', () => {
    if(lastBtn.className !== 'operator'){
    displayText.innerText = 0;
    updateDisplayValue();
    } else {
        nextOperator = undefined;
    }
  })
}




// TO DO

// Clear entry button functionality

// Add keyboard support?

// Condense functions where possible

// Change font size at different numbers of digits, add error if number gets too long
// Round answers with long decimals so that they don’t overflow the screen
// Maximum 8 decimal places for now