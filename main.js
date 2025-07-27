// Set references to all objets on the page we want to change 
const input = document.querySelector(".input p");
const btns = document.querySelectorAll(".btn.eq"); 

let equation = '';

// loop through each button and add an event listeners 
// the event listener will update a button when a displayed equation button is pressed
for (let btn of btns) {
    btn.addEventListener("click", () => {
        equation += btn.textContent; 
        input.textContent = equation;
    })
}

