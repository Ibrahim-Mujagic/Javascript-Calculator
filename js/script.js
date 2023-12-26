const calculatorDisplay = document.querySelector('.cont-numbers h2');
const calculatorBtns = document.querySelectorAll('.calculator-buttons .btn-calc');
const btnsAction = document.querySelectorAll('.btn-action');
const btnEqual = document.querySelector('#btn-equal');
const btnClear = document.querySelector('.clear-btn-cont button');
let numToCalc = [];
let lastAction = null;

init();

function init(){
  calculatorBtns.forEach(btn=>{
    btn.addEventListener('click',function(){
      innerNumberDisplay(this.innerText);
    })
  })

  btnsAction.forEach(btnAction=>{
    btnAction.addEventListener('click',function(){
      if (calculatorDisplay.innerText !== '') {
        numToCalc.push(calculatorDisplay.innerText,btnAction.innerText);
      }
    
      calculatorDisplay.style.visibility = 'hidden'
      setTimeout(function(){
        calculatorDisplay.style.visibility = 'visible';

        lastAction = calculatorDisplay.innerText;
      },80)
    })
  })

    btnEqual.addEventListener('click',calcResult);
    btnClear.addEventListener('click',clearCalculator);
}

function innerNumberDisplay(btnText){
  if (calculatorDisplay.innerText === '00000' || calculatorDisplay.innerText === lastAction ) {
    resetDisplay();
  }

  calculatorDisplay.innerText += btnText;
}

function calcResult(){
  if (!calculatorDisplay.innerText !== '') {
    numToCalc.push(calculatorDisplay.innerText);
  }
  
  const expression = numToCalc.join(' ');
  const result = eval(expression);
  calculatorDisplay.innerText = result;
  
  numToCalc = [];
  lastAction = calculatorDisplay.innerText;
}

function clearCalculator(){
  numToCalc = [];
  calculatorDisplay.innerText = '00000'; 
}

function resetDisplay(){
  calculatorDisplay.innerText = '';
}
