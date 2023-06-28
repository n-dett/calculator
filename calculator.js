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
  if(displayText.innerText.length <= 14){
    if(clearDisplay === true) {
      displayText.innerText = '';
      clearDisplay = false;
    }
    displayText.innerText += this.value;
  }
  updateDisplayValue();
  operatorBtns.disabled = false;
  operatorClicked = false;
  isEqualsClicked = false;
  console.log(displayValue, 'display value');
}

function updateDisplayValue() {
  displayValue = Number(displayText.innerText);
  scaleFontSize();
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
  if(currentBtn === 'equals' && lastBtn === 'equals' && displayValue !== 'ERR') {
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
  total = calculate(firstNum, secondNum, operator).toString();
  if(total.length > 15 && !total.includes('.')) {
    calcErr();
  } else if(isNaN(total)) {
      calcErr();
  } else {
      total = total.slice(0, 15);
      total = +total;
      console.log(total, 'total');
      displayText.innerText = total;
      updateDisplayValue();
      firstNum = total;
  }
  
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
    } else if(displayValue === 'ERR') {
      displayText.innerText = '0.'
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

// Scale font size

function scaleFontSize() {
  if(displayText.innerText.length <= 10){
    displayText.style.fontSize = '61px';
  } else if(displayText.innerText.length === 11){
      displayText.style.fontSize = '55px';
  } else if(displayText.innerText.length == 12){
      displayText.style.fontSize = '52px';
  }else if(displayText.innerText.length === 13){
      displayText.style.fontSize = '49px';
  } else if(displayText.innerText.length == 14){
      displayText.style.fontSize = '45px';
  } else if(displayText.innerText.length == 15){
      displayText.style.fontSize = '43px';
  } else if(displayText.innerText.length > 15){
      displayText.style.fontSize = '61px';
      calcErr();
  }
}

function calcErr() {
  displayText.innerText = 'ERR';
  updateDisplayValue();
  operatorBtns.disabled = true;
  firstNum = undefined;
  secondNum = undefined;
  total = undefined;
}







// TO DO

// Allow decimal to be entered on second number

// Condense functions where possible