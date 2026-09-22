const buttonContainer = document.querySelector(".buttonContainer");
const text = document.querySelector("#text");

buttonContainer.addEventListener("click", (e)=> {
    let b = e.target.closest("button");
    let btn = b?.dataset?.action;
    if(btn === "bold"){
        text.classList.toggle("bold");
    }
    if(btn === "italic"){
        text.classList.toggle("italic");
    }
    if(btn === "left"){
        // text.classList.toggle("left");
        text.style.textAlign = "left";
    }
    if(btn === "center"){
        // text.classList.toggle("center");
        text.style.textAlign = "center";
    }
    if(btn === "right"){
        // text.classList.toggle("right");
        text.style.textAlign = "right";
    }
    if(btn === "uppercase"){
        text.classList.toggle("uppercase");
    }
    if(btn === "lowercase"){
        text.classList.toggle("lowercase");
    }
    if(btn === "capitalize"){
        text.classList.toggle("capitlize");
    }
    if(btn === "clear"){
        text.style.fontWeight = "normal";
        text.style.fontStyle = "normal";
        text.style.textAlign = "left";
        text.value = "";
    }
})