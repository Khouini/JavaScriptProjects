var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css = document.querySelector("h3");
var gradient = document.getElementById("gradient");

function display() {
    gradient.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = gradient.style.background + ";";
}

color1.addEventListener("input", display);
color2.addEventListener("input", display);