document.addEventListener("DOMContentLoaded", loadButton);

function loadButton() {
    var tag = document.createElement("button");
    var text = document.createTextNode("Farbe ändern");
    tag.addEventListener("click", changeColor);
    tag.appendChild(text);

    tag.style.position = "fixed";
    tag.style.left = "10px";
    tag.style.bottom = "10px";
    tag.style.zIndex = "1000";

    document.body.appendChild(tag);

    // Beim Laden der Seite prüfen, ob eine gespeicherte Farbe vorhanden ist und setzen
    var storedColor = localStorage.getItem("selectedColor");
    if (storedColor) {
        var root = document.documentElement;
        root.style.setProperty("--main-color1", storedColor);
    }
}

function changeColor() {
    var root = document.documentElement;

    // Finde jetzige Farbe heraus
    var currentColor = getComputedStyle(root).getPropertyValue('--main-color1').trim();

    // Zwischen zwei Farben wechseln
    var newColor = currentColor === "#ADCBC7" ? "#79A6A0" : "#ADCBC7";
    
    // Neue Farbe setzen
    root.style.setProperty("--main-color1", newColor);

    // Speichere Farbe
    localStorage.setItem("selectedColor", newColor);
}
