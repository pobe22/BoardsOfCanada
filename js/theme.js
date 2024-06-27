document.addEventListener("DOMContentLoaded", loadButton);

function loadButton() {
    var tag = document.createElement("button");
    var text = document.createTextNode(""); // Der Text wird später dynamisch gesetzt
    tag.appendChild(text);

    tag.addEventListener("click", function() {
        changeColor(tag); // Übergabe des Buttons an die changeColor-Funktion
    });

    tag.style.position = "fixed";
    tag.style.left = "200px";
    tag.style.bottom = "10px";
    tag.style.zIndex = "1000";

    document.body.appendChild(tag);

    // Beim Laden der Seite prüfen, ob eine gespeicherte Farbe vorhanden ist und setzen
    var storedBgColor = localStorage.getItem("selectedBgColor");
    var storedTextColor = localStorage.getItem("selectedTextColor");
    var storedContentColor = localStorage.getItem("selectedContentColor");

    if (storedBgColor && storedTextColor && storedContentColor) {
        var root = document.documentElement;
        root.style.setProperty("--main-color1", storedBgColor);
        root.style.setProperty("--text-color1", storedTextColor);
        root.style.setProperty("--content-color1", storedContentColor);
    }

    // Button-Text setzen
    updateButtonText(tag, storedBgColor);
}

function changeColor(button) {
    var root = document.documentElement;

    // Finde jetzige Farben heraus
    var currentBgColor = getComputedStyle(root).getPropertyValue('--main-color1').trim();
    var currentTextColor = getComputedStyle(root).getPropertyValue('--text-color1').trim();
    var currentContentColor = getComputedStyle(root).getPropertyValue('--content-color1').trim();

    // Farben definieren
    var bgColorLight = "#ADCBC7"; // Heller Hintergrund
    var bgColorDark = "#2E7168"; // Dunkler Hintergrund
    var textColorLight = "#FFFFFF"; // Heller Text
    var textColorDark = "#000000"; // Dunkler Text
    var contentColorLight = "#DAE8E6"; // Helle Content-Farbe
    var contentColorDark = "#8aaaa5"; // Dunkle Content-Farbe

    // Hintergrundfarbe wechseln
    var newBgColor = currentBgColor === bgColorLight ? bgColorDark : bgColorLight;
    // Textfarbe und Content-Farbe entsprechend der Hintergrundfarbe wechseln
    var newTextColor = newBgColor === bgColorLight ? textColorDark : textColorLight;
    var newContentColor = newBgColor === bgColorLight ? contentColorLight : contentColorDark;

    // Neue Farben setzen
    root.style.setProperty("--main-color1", newBgColor);
    root.style.setProperty("--text-color1", newTextColor);
    root.style.setProperty("--content-color1", newContentColor);

    // Speichere Farben
    localStorage.setItem("selectedBgColor", newBgColor);
    localStorage.setItem("selectedTextColor", newTextColor);
    localStorage.setItem("selectedContentColor", newContentColor);

    // Button-Text aktualisieren
    updateButtonText(button, newBgColor);
}

function updateButtonText(button, bgColor) {
    var bgColorLight = "#ADCBC7"; // Heller Hintergrund
    button.textContent = bgColor === bgColorLight ? "Dunkel schalten" : "Hell schalten";
}
