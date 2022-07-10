const dolphinScore1 = prompt("What's the first Dolphin's team score");
const dolphinScore2 = prompt("What's the second Dolphin's team score");
const dolphinScore3 = prompt("What's the third Dolphin's team score");

const koalasScore1 = prompt("What's the first Koalas's team score");
const koalasScore2 = prompt("What's the second Koalas's team score");
const koalasScore3 = prompt("What's the third Koalas's team score");

const dolphinAverageScore = ((Number(dolphinScore1) + Number(dolphinScore2) + Number(dolphinScore3)) / 3);
const koalasAverageScore = ((Number(koalasScore1) + Number(koalasScore2) + Number(koalasScore3)) / 3);

console.log(`Dolphin's Team: s1 = ${dolphinScore1} s2 = ${dolphinScore2} s3 = ${dolphinScore3} average = ${dolphinAverageScore}`);
console.log(`Koalas's Team: s1 = ${koalasScore1} s2 = ${koalasScore2} s3 = ${koalasScore3} average = ${koalasAverageScore}`);

let winnerCompetitonDraw = dolphinAverageScore === koalasAverageScore;
let winnerCompetition = dolphinAverageScore > koalasAverageScore;

const minScore = 100;
const checkMinScoreDolphin = dolphinAverageScore > 100;
const checkMinScoreKoalas = koalasAverageScore > 100;

if ((winnerCompetitonDraw) && (checkMinScoreDolphin) && (checkMinScoreKoalas)) {
    console.log("There is a draw");
} else if ((winnerCompetition) && (checkMinScoreDolphin)) {
    console.log("Dolphin's team is the winner");
} else if ((!winnerCompetition) && (checkMinScoreKoalas)) {
    console.log("Koadlas's team is the winner");
} else {
    console.log('There is no winner');
}