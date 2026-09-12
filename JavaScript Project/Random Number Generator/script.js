let min = document.querySelector("#min");
let max = document.querySelector("#max");
let randomNumber = document.querySelector("#randomNumber");
let generate = document.querySelector("#generate");
let reset = document.querySelector("#reset");
let errorMessage = document.querySelector(".errorMessage");


function randomNumberGen() {
    let minValue = Number(min.value);
    let maxValue = Number(max.value);
    let randomNum = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    randomNumber.textContent = `Random Number : ${randomNum}`;
    randomNumber.style.color = "green";
    randomNumber.style.fontSize = "20px";
}

function resetNumber() {
    min.value = 1;
    min.value = 100;
    randomNumber.textContent = `Click the button to  generate number`;
    randomNumber.style.color = "black";
}



generate.addEventListener("click", (e) => {
    if(Number(min.value) > Number(max.value)){
        errorMessage.textContent = `please enter number less than maximum value inside minimum input`;
        randomNumber.textContent = `Click the button to  generate number`;
        errorMessage.style.color = "red";
    } else {
        randomNumberGen();
        errorMessage.remove();
    }
    console.log(errorMessage.textContent)
});
reset.addEventListener("click", (e) => resetNumber());