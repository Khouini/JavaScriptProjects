'use strict';
const billValue = 100;
const bills = [22, 295, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill) {
    return ((bill >= 50 && bill <= 300) ? (bill * 15 / 100) : (bill * 20 / 100));
}
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip([bills[i]]));
}
for (let i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals);

function calcAverg(Arr) {
    let sum = 0;
    let aver = 0;
    for (let i = 0; i < Arr.length; i++) {
        sum += Arr[i];
    }
    return (aver = sum / Arr.length);
}
console.log(`The average of totals is ${calcAverg(totals)}`);