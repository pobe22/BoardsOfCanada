document.addEventListener("DOMContentLoaded", loadButton);

function loadButton(){
    var tag = document.createElement("button");
    var text = document.createTextNode("Farbe ändern");
    tag.addEventListener("click", changeColor);
    tag.appendChild(text);

    tag.style.position = "fixed";
    tag.style.left = "10px";
    tag.style.bottom = "10px";
    tag.style.zIndex = "1000";

    document.body.appendChild(tag);
}

function changeColor() {
    var root = document.documentElement;
 
    // Get the current background color
    var currentColor = getComputedStyle(root).getPropertyValue('--main-color1').trim();
 
    // Check current color and toggle to a new one
    root.style.setProperty("--main-color1", currentColor === "#ADCBC7" ? "#79A6A0" : "#ADCBC7");
}