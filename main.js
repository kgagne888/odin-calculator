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