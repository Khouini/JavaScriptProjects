'use strict'
const game = {
    team1: 'Bayern Munich',
    team2: 'Bourrussia Dortmund',
    Players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Kimich',
            'Goretzka',
            'Coman',
            'Muller',
            'Genarby',
            'Lewandowski',
            'Khouini',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Genarby', 'Lewandowski', 'Hummels'],
    date: 'Oct 22th, 2001',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    // printGoals: function() {                        EX6
    //     console.log(this.scored.length);
    //     console.log(...this.scored)
    // }
};
console.log('----EX1----');
const [players1, players2] = game.Players;
console.log(players1);
console.log(players2);
console.log('----EX2----');
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);
console.log('----EX3----');
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
console.log('----EX4----');
const substitute = ['Thiago', 'Coutinho', 'Perisic'];
const playersFinals = [...players1, ...substitute];
console.log(playersFinals);
console.log('----EX5----');
const {
    odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
console.log('----EX6----');

function printGoals(...playersG) {
    console.log(`Thez have scored ${playersG.length} goals.`);
    console.log('Players that have scored: ');
    console.log(...playersG);
}
printGoals(...game.scored);
console.log('------------');
printGoals('Messi', 'Ronaldo', 'Khouini');
console.log('----EX7----');
(team2 > team1) && console.log('team 2 is more likely to win');
(team1 > team2) && console.log('team 1 is more likely to win');
console.log('Part 2 !!!!!!!!!!!!!!');
console.log('-------------ex1------------');
for (const item of game.scored) console.log(item);
for (const [i, p] of game.scored.entries()) { console.log(`goal ${i+1}: ${p}`); }
console.log('------------ex2-------------');
const odds = Object.values(game.odds);
let aver = 0;
for (const odd of odds) {
    aver += odd;
}
let average = (aver / odds.length);
console.log(average);
console.log('------------ex3-------------');
for (const [string, score] of Object.entries(game.odds)) {
    let teamStr = string === 'x' ? 'draw' : `victory ${game[string]}`;
    console.log(`odd of ${teamStr} : ${score}`);
}
console.log('----------Bonus------------');
