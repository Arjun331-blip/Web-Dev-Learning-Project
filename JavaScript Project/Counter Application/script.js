let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let countDisplay = document.querySelector("#count");


let count = 0, inc = 0, dec = 0;

function incrementCount(){
    count = (count >= 0) ? count + 1 : 0;
    inc = count;
    countDisplay.textContent = inc;  
    console.log("increment : ", inc);
}

function decrementCount(){
    count = (count > 0) ? count - 1 : 0;
    dec = count;
    countDisplay.textContent = dec; 
    console.log("decrement : ", dec);  
}

increment.addEventListener("click", (e) => incrementCount());
decrement.addEventListener("click", (e) => decrementCount());