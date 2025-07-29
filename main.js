// Set references to all objets on the page we want to change 
const input = document.querySelector(".input p");
const eqButton = document.querySelectorAll(".btn.eq"); 
const actionButton = document.querySelectorAll(".btn.action");

let equation = '';

// loop through each button and add an event listeners 
// the event listener will update a button when a displayed equation button is pressed
for (let btn of eqButton) {
    btn.addEventListener("click", () => {
        equation += btn.textContent; 
        input.textContent = equation;
    })
}

// add actions to the action buttons 
const actions = {
    MRC: () => console.log("HELLO MEMORY!!!"),
    "M-": () => console.log("HELLO MEMORY MINUS"),
    "M+": () => console.log("HELLO MEMORY PLUS"),
    "√": () => console.log("SQRT"),
    "%": () => console.log("MODULOS"),
    "⌫": () => console.log("backspace"),
    "CE": () => console.log("clear"), 
    "AC": () => console.log("WHAT DOES THIS DO"), 
    "=": () => console.log("equals"),
}

for (let btn of actionButton) {
    btn.addEventListener("click", () => {
        actions[btn.textContent]();
    })
}

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