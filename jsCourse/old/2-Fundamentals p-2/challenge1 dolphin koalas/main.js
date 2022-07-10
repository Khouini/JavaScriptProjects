// 'use strict';

const dolphinScore1 = Number(prompt("What's the first Dolphin's team score"));
const dolphinScore2 = Number(prompt("What's the second Dolphin's team score"));
const dolphinScore3 = Number(prompt("What's the third Dolphin's team score"));
const koalasScore1 = Number(prompt("What's the first Koalas's team score"));
const koalasScore2 = Number(prompt("What's the second Koalas's team score"));
const koalasScore3 = Number(prompt("What's the third Koalas's team score"));
const calcAverage = (a, b, c) => ((a + b + c) / 3);
const dolphinAverage = calcAverage(dolphinScore1, dolphinScore2, dolphinScore3);
const koalasAverage = calcAverage(koalasScore1, koalasScore2, koalasScore3);
console.log(`Dolphin's team score: ${dolphinAverage}`);
console.log(`koaloas's team score: ${koalasAverage}`);

function checkWinner(dolphinAverage, koalasAverage) {
    const theLargerNumber = (dolphinAverage > koalasAverage) ? true : false;
    if (theLargerNumber) {
        if (dolphinAverage > (koalasAverage * 2)) {
            console.log(`Dolphin's team won (${dolphinAverage} vs. ${koalasAverage})`);
        } else {
            console.log("No team wins");
        }
    } else {
        if (koalasAverage > (dolphinAverage * 2)) {
            console.log(`koalas's team won (${koalasAverage} vs. ${dolphinAverage}`);
        } else {
            console.log("No team wins");
        }
    }
}
checkWinner(dolphinAverage, koalasAverage);