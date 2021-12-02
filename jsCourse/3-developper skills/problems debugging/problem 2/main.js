"use strict";
const tempreture = [17, 21, 23, 12, 27, 38];
function printForecast(arr) {
  let str = "... ";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} °C ` + `in day ${i + 1}` + " ... ";
  }
  return str;
}
console.log(printForecast(tempreture));
