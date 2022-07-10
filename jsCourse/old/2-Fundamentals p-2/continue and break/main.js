'use strict';
const yacine = [
    ['Aziz', 'Baha', 'Aziz'],
    'Yacine',
    'Khouini',
    (2021 - 2001),
    'Student',
];
const types = [];
console.log(yacine);
console.log("----ONLY STRINGS----")
for (let i = 0; i < yacine.length; i++) {
    if (typeof(yacine[i]) !== 'string') continue; // "continue" means => skip this itération
    console.log(yacine[i], typeof(yacine[i]));
}
console.log("---BREAK WITH FIRST NUMBER----");
for (let i = 0; i < yacine.length; i++) {
    if (typeof(yacine[i]) === 'number') break; // "break" means => the loop is ternimated completely
    console.log(yacine[i], typeof(yacine[i]));
}