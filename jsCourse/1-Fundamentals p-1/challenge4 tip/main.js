const billValue = Number(prompt("What's the bill value?"));
const tipValue = (billValue >= 50 && billValue <= 300) ? (billValue * 15 / 100) : (billValue * 20 / 100);
console.log(`The bill was ${billValue}, the tip: ${tipValue}, the total value is ${billValue+tipValue}`);