var text = document.getElementsByClassName("text");
var body = document.body;
var images = document.querySelectorAll(".image-container img")

function enlargeText(){
    for (var i=0; i < text.length; i++){
        text[i].style.fontSize = "xx-large";
    }
}

function reset() {
    for (var i = 0; i < text.length; i++) {
        text[i].style.removeProperty("font-size");
    }
}

function accesibleColors(){
    for (var i=0; i < text.length; i++){
        text[i].style.color = "#FFFAF0";
    }
    body.style.backgroundColor = "#5A5A5A";
}

function resetColors(){
    for (var i = 0; i < text.length; i++) {
        text[i].style.removeProperty("color");
    }
    body.style.removeProperty("background-color");
}

function displayAlt(){
    images.forEach (img => {
        var altText = document.createElement("p");
        altText.textContent = img.alt;  // set alt text
        altText.className = "alt-text";
        img.parentElement.appendChild(altText);  // append below the image
    })
}

function turnOffAlt() {
    // select all elements with the class "alt-text" and remove them
    var altTexts = document.querySelectorAll(".alt-text");
    altTexts.forEach(altText => {
        altText.remove();
    });
}