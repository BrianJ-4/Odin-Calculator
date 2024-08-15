// Global Variables -------------------------------------------
let operand1 = "";
let operand2 = "";
let operator;
let displayText = "";
let symbolPressed = false;

const symbolObj = {
    add : "+",
    subtract : "-",
    multiply : "x",
    divide : "/",
}
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

function operate(symbol, num1, num2){
    if(symbol == "+")
        add(num1, num2);
    else if(symbol == "-")
        subtract(num1, num2);
    else if(symbol == "*")
        multiply(num1, num2);
    else if(symbol == "/")
        divide(num1, num2);
}
// ------------------------------------------------------------

// Button Handling --------------------------------------------
const buttons = document.getElementById("buttons");

buttons.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if(!isButton)
        return;

    if(!isNaN(event.target.id) || event.target.id == ".")
    {
        if(!symbolPressed)
            operand1 += event.target.id;
        else
            operand2 += event.target.id;
    }
    else if(symbolObj[event.target.id])
    {
        symbolPressed = true;
    }
    else if(event.target.id == "equal")
    {
        symbolPressed = false;
    }
        

    updateDisplay(event.target.id);
    console.log(operand1 + "  " + operand2);
})
// ------------------------------------------------------------

// Display Updating -------------------------------------------
const screen = document.getElementById("screen")

function updateDisplay(id){
    if(!isNaN(id))
        displayText += id;
    else if(id == "decimal" && !displayText.includes("."))
        displayText += "."
    
    screen.innerHTML = displayText;
}
// ------------------------------------------------------------
