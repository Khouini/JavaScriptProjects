"use strcit";
let dice = 0;
for (let i = 0; i !== 10; i++) {
  dice = Math.trunc(Math.random() * 20) + 1;
  console.log(dice);
}
