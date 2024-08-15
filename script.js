// Global Variables -------------------------------------------
let operand1 = "";
let operand2 = "";
let operator = "";
let symbolPressed = false;
let result = 0;

const operations = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
  };

// ------------------------------------------------------------

// Calculation Functions --------------------------------------
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == 0){
        return "BAD";
    }
    return a / b;
}
// ------------------------------------------------------------

// Button Handling --------------------------------------------
const buttons = document.getElementById("buttons");

buttons.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if(!isButton)
        return;
    if(!isNaN(event.target.id) || (event.target.id == "." && (!operand1.includes(".") || !operand2.includes(".")))){
        if(!symbolPressed){
            if(result != 0)
                operand1 = event.target.id;
            else{
                operand1 += event.target.id;                
                result = 0;
            }
            updateDisplay(operand1);    
        }
        else{
            operand2 += event.target.id;
            updateDisplay(operand2);
        }
    }
    else if(operations[event.target.id])
    {
        if(operator != "")
            calculateAndReset();

        operator = event.target.id;        
        symbolPressed = true;
    }
    else if(event.target.id == "equal")
    {
        calculateAndReset();
    }
    else if(event.target.id == "clear"){
        clear();
    }
    console.log(operand1 + "  " + operand2);
})

function calculateAndReset(){
    result = operations[operator](Number(operand1), Number(operand2));
    operand1 = String(result);
    updateDisplay(result);
    console.log(result);
            
    operand2 = "";
    symbolPressed = false;
}

function clear(){
    operand1 = "";
    operand2 = "";
    result = 0;
    symbolPressed = false;
    updateDisplay("0");
}
// ------------------------------------------------------------

// Display Updating -------------------------------------------
const screen = document.getElementById("screen")

function updateDisplay(text){
    screen.innerHTML = ""
    screen.innerHTML = text;
}
// ------------------------------------------------------------