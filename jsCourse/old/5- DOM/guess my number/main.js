"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let s = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.getElementById("message").textContent = message;
}
const displayScore = function(score) {
    document.getElementById("score").textContent = score;
}
displayScore(s);
document.getElementById("check").addEventListener("click", function() {
    const guess = Number(document.getElementById("guess").value);
    if (!guess) {
        displayMessage("🛑 No Secret Number");
    } else if (guess === secretNumber) {
        if (s > highScore) {
            highScore = s;
            document.getElementById("highScore").textContent = highScore;
        }
        displayMessage("🎉 Correct Number!");
        document.getElementById("number").textContent = secretNumber;
        document.querySelector("body").classList.remove("bg-dark");
        document.querySelector("body").classList.add("bg-warning");
        document.getElementById("number").classList.remove("fs-1");
        document.getElementById("number").classList.add("display-1");
    } else if (guess !== secretNumber) {
        displayMessage(secretNumber > guess ? "❌ The number is low 📉" : "❌The number is high 📈");
        if (s > 0) {
            s = s - 1;
            displayScore(s);
        }
        if (s <= 0) {
            displayMessage("🛑 You Lost The Game! 🛑");
        }
    }
});
document.getElementById("again").addEventListener("click", function() {
    s = 20;
    displayScore(s);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.getElementById("number").textContent = "?";
    document.getElementById("guess").value = "";
    console.log(secretNumber);
    displayMessage("🤔 Start guessing... 🤔");
    document.querySelector("body").classList.remove("bg-warning");
    document.querySelector("body").classList.add("bg-dark");
    document.getElementById("number").classList.remove("display-1");
    document.getElementById("number").classList.add("fs-1");
});