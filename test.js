var text = document.getElementsByClassName("text");
var body = document.body;
var images = document.querySelectorAll(".image-container img")
var isAccessibleColorsEnabled = false;
var isTextEnlarged = false;

function enlargeText(){
    isTextEnlarged = true;
    for (var i=0; i < text.length; i++){
        text[i].style.fontSize = "xx-large";
    }
    var altTexts = document.querySelectorAll(".alt-text");
    altTexts.forEach(altText => {
        altText.style.fontSize = "xx-large"; 
    });
}

function reset() {
    isTextEnlarged = false;
    for (var i = 0; i < text.length; i++) {
        text[i].style.removeProperty("font-size");
    }
    var altTexts=document.querySelectorAll(".alt-text");
    altTexts.forEach(altText => {
        altText.style.removeProperty("font-size");
    })
}

function accesibleColors(){
    isAccessibleColorsEnabled = true;  //track accessible color state

    for (var i=0; i < text.length; i++){
        text[i].style.color = "#FFFAF0";
    }
    body.style.backgroundColor = "#5A5A5A";
    
    //set accessible color for displayed alt text paragraphs if any
    var altTexts = document.querySelectorAll(".alt-text");
    altTexts.forEach(altText => {
        altText.style.color = "#FFFAF0"; 
    });
}

function resetColors(){
    isAccessibleColorsEnabled = false;  //track accessible color state

    for (var i = 0; i < text.length; i++) {
        text[i].style.removeProperty("color");
    }
    body.style.removeProperty("background-color");

    var altTexts=document.querySelectorAll(".alt-text");
    altTexts.forEach(altText => {
        altText.style.removeProperty("color");
    })
}

function displayAlt(){
    images.forEach (img => {
        var altText = document.createElement("p");
        altText.textContent = img.alt;  //set alt text
        altText.className = "alt-text";
        if (isAccessibleColorsEnabled) {
            altText.style.color = "#FFFAF0";  //apply accessible color if enabled
        }
        img.parentElement.appendChild(altText);  //append below the image
    })
}

function turnOffAlt() {
    //select all elements with the class "alt-text" and remove them
    var altTexts = document.querySelectorAll(".alt-text");
    altTexts.forEach(altText => {
        altText.remove();
    });
}