// Global Variables -------------------------------------------
let operand1 = "";
let operand2 = "";
let operator = "";
let result = "";

const operations = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
  };

// ------------------------------------------------------------

// Calculation Functions --------------------------------------
function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    if (b == 0)
    {
        return "BAD";
    }
    return a / b;
}
// ------------------------------------------------------------

// Button Setup -----------------------------------------------
const digitButtons = document.querySelectorAll(".digitButton");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equalButton = document.getElementById("equal");

digitButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        processDigitButton(button);
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        processOperatorButton(button);
    })
})

equalButton.addEventListener('click', (event) => {
    processEqualButton(equalButton);
})
// ------------------------------------------------------------

// Button Handling --------------------------------------------
function processDigitButton(button)
{
    //Reset result if we already have a result value and we press a digit
    if(result != "")
    {
        result = "";
    }

    if (operator == "")
    {
        if(button.id == "." && operand1.includes("."))          
            return;
        operand1 += button.id;
        updateDisplay(operand1);
    }
    else
    {
        if(button.id == "." && operand2.includes("."))       
            return;
        operand2 += button.id;
        updateDisplay(operand2);
    }
    
    console.log(operand1 + "  " + operand2);
}

function processOperatorButton(button)
{
    //Handle case where user enters operand, operator, operand, operator
    calculate();

    if(result != "")
    {
        operand1 = result;
    }

    operator = button.id;
}

function processEqualButton()
{
    //Handle case where user enters operand, operator, operand, equals
    calculate();
}
// ------------------------------------------------------------

// Main Calculation Function ----------------------------------
function calculate()
{
    if(operand1 != "" && operand2 != "")
    {
        result = operations[operator](Number(operand1), Number(operand2));
        updateDisplay(result);
        operand1 = "";
        operand2 = "";
        operator = "";
        console.log(result);
    }
}
// ------------------------------------------------------------

// Display Updating -------------------------------------------
const screen = document.getElementById("screen")

function updateDisplay(text)
{
    screen.innerHTML = ""
    screen.innerHTML = text;
}
// ------------------------------------------------------------