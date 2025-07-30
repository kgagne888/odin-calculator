// operator button functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b; 
const divide = (a, b) => a / b; 
const sqrt = (a) => Math.sqrt(a);
const power = (a, b) => a ** b;
const remainder = (a, b) => a % b;

// variables for 3 parts of the equation 
let num1 = null, operator = null, num2 = null; 

// page elements that we want to adjust 
const digits = document.querySelectorAll('.btn.digit'); 
const input = document.querySelector('.input p');
const actions = document.querySelectorAll('.btn.action');
const operatorBtns = document.querySelectorAll('.btn.operator');
const equation = document.querySelector('.equation p');

// update the input in screen when a digit is clicked
digits.forEach(digit => digit.addEventListener("click", () => {
    let val;
    switch (digit.textContent) {
        case ("π"): val = Math.PI; break;
        case ("e"): val = Math.E; break;
        default: val = digit.textContent; break;
    }
    num2 = parseFloat(val); 
    input.textContent = val;
}));

// create a function operate that takes two numbers and calls on one of the operator button functions
const operate = () => {
    const a = parseFloat(num1); 
    const b = parseFloat(num2);

    const operators = {
        "+": () => add(a, b), 
        "−": () => subtract(a, b), 
        "×": () => multiply(a, b), 
        "÷": () => divide(a, b), 
        "√": () => sqrt(a), 
        "^": () => power(a, b), 
        "%": () => remainder(a, b),
    }
    const total = operators[operator]();
    input.textContent = total;
    equation.textContent = `${num1} ${operator} ${num2}`;
    num2 = total;
    return total;
}

// actions object
const actionsMap = {
    "=": () => operate(),
}

actions.forEach(action => action.addEventListener("click", () => {
    actionsMap[action.textContent]();
}));

operatorBtns.forEach(btn => btn.addEventListener("click", () => {
    operator = btn.textContent; 
    num1 = num2; 
    num2 = null;
}));


