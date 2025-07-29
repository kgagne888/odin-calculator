// operator button functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b; 
const divide = (a, b) => a / b; 
const sqrt = (a) => Math.sqrt(a);
const power = (a, b) => a ** b;
const remainder = (a, b) => a % b;

// variables for 3 parts of the equation 
let num1, operator, num2; 

// create a function operate that takes two numbers and calls on one of the operator button functions
const operate = function(num1, operator, num2) {
    const operators = {
        "+": add(num1, num2), 
        "-": subtract(num1, num2), 
        "×": multiply(num1, num2), 
        "÷": divide(num1, num2), 
        "√": sqrt(num1), 
        "^": power(num1, num2), 
        "%": remainder(num1, num2),
    }
    return operators[operator];
}

// page elements that we want to adjust 
const digits = document.querySelectorAll('.btn.digit'); 
const input = document.querySelector('.input p');

// update the input in screen when a digit is clicked
digits.forEach(digit => digit.addEventListener("click", () => {
    let val;
    switch (digit.textContent) {
        case ("π"):
            val = Math.PI;
            break;
        case ("e"): 
            val = Math.E;
            break;
        default: 
            val = digit.textContent;
            break;
    }
    num2 = val; 
    input.textContent = val;
}));