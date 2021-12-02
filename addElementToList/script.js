var button = document.getElementById("submit");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return (input.value.length);
}

function createElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = '';
}

function display() {
    if (inputLength() > 0) {
        createElement();
    }
}

function display2(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createElement();
    }
}
button.addEventListener("click", display);
input.addEventListener("keypress", display2);