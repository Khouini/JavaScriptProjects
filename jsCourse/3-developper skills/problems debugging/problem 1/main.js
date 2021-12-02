"use strict";
const temperatures = [3, -2, -6, -1, 9, "error", 13, 17, 15, 9, 5];
const temperatures2 = ["error", 5, -2, 1, -1, 9, 13, 25, 15, 9, 5];
console.log(temperatures, temperatures2);

function calcTempAmpliture(arr) {
  let errorIndice;
  const filtredTemps = [0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      errorIndice = i;
      continue;
    }
    filtredTemps[i] = arr[i];
  }
  arr.splice(errorIndice, 1);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return max - min;
}
const amplitude = calcTempAmpliture(temperatures);
const amplitude2 = calcTempAmpliture(temperatures2);

console.log(`The amplitude is ${amplitude}`);
console.log(`The amplitude 2 is ${amplitude2}`);
