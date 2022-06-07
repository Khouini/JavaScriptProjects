"use strict";

//! Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

//! Data needed for first part of the section
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 2, time, adress = "Tunis" }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`There is your delicious Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    //! function with rest arguments
    return `There your pizza with main ingredient ${mainIngredient} and the other ingredients: ${otherIngredients}`;
  },
};
// function with one parameter (object)
// restaurant.orderDelivery({
//   starterIndex: 1,
//   mainIndex: 1,
//   time : "13h30",
//   adress: "Nabeul, Mora"
// })

//!Arrays
//* Destructuring arrays
// const arr = [5, 7, 44, 67];
// const [x, y, z] = arr;
//console.log(x, y, z);

//* Switching
//let [first, , secondary] = restaurant.starterMenu;
//console.log(first, secondary);
//[first, secondary] = [secondary, first];
//console.log(first, secondary);

//* Receive more than one return
// [first, secondary] = restaurant.order(0, 2);
// console.log(first, secondary);

//* Destructuring inside Destructuring (nested)
// const nested = [2, 5, [34, 77]];
// const [ , first, secondary] = nested;
// console.log(first, secondary);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//*  Default values

// const [i=1, j=1, k=1] = [44, 67]
// console.log(i, j, k);

//! Objects
//* Destructuring Objects
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);
//* Destructuring Objects with resaiging different names
// const {name: restaurantName, openingHours: Hours, categories: Tags} = restaurant;
// console.log(restaurantName, Hours, Tags);
//* Destructuring Objects with default values if object dosen't exist
// const {menu = [], starterMenu:starters = []} = restaurant;
// console.log(menu, starters);

//*  Mutating variables : variables = obj
// let [a, b] = [2, 5];
// let obj = {a : 45, b : 56, c : 222};
// ({a, b} = obj);
// console.log(a, b);

//* Destructuring inside Destructuring Objects (nested)
// const {fri : {open: o, close: c}} = restaurant.openingHours;
// console.log(o, c);

//!  The spread operator ... (get individual elements of the array)

// const arr=  [34, 56, 33, 46];
// const newArr = [1, 2, 3, ...arr];
// console.log(...newArr);

//const newMenu = [...restaurant.mainMenu, "Burger"];
// console.log(newMenu);

//*  Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//? iterables : arrays, strings, maps, sets NOT OBJECTS

// const str = "Yacine";
// console.log(...str);

// * function with the spread operation as parametera
// const ingredients =  [prompt("Enter Ingredient 1"), prompt("Enter Ingredient 2"), prompt("Enter Ingredient 3")];
// restaurant.orderPasta(...ingredients);AbortController;

//* The spread operator with objects  / Copy an object
// const newRestaurent = {founded: 2001, ...restaurant};
// console.log(newRestaurent);
//! Spread, because on right side of =
// const spreadArr = [1, 2, 3, ...[5, 6, 7]];
// console.log(spreadArr);
//! Rest Pattern, because on left side of =
// const [a, b, ...others] = spreadArr;
// console.log(others);
//* The Rest Pattern with arrays
// const [firstFood, secondFood, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(firstFood, secondFood, otherFood);
//* The Rest Pattern with objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
//! function with rest arguments

// function add(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   return sum;
// }
// console.log(add(5, 5));
// console.log(add(5, 5, 7, 3));
// const numbers = [5, 5, 7, 3];
// console.log(add(...numbers));

// console.log(restaurant.orderPizza("Escalope", "Psaal", "Champigion"));

//! SHORT Circuting
// const checkGuests = restaurant.guests ? restaurant.guests : 10;
// restaurant.guests = 3;
// const checkGuests = restaurant.guests || 10; // naajmou nestaamlou hethi fi blaset el if
// console.log(checkGuests);

// const pizza = restaurant.orderPizza && restaurant.orderPizza("Escalope", "Psaal", "Champigion");
// console.log(pizza);
//! SHORT Circuting with nullish operator
//? nullish values are null and undefined not (0 and "")
// restaurant.guests = 0;
// const checkGuests = restaurant.guests ?? 10;
// console.log(checkGuests);

const rest1 = {
  name: "Bella Napoli",
  nbGuests: 0,
};
const rest2 = {
  name: "The Cliff",
};

//! OR, Nullish Assaignment operator

// rest1.nbGuests = rest1.nbGuests || 10;
// rest2.nbGuests = rest2.nbGuests || 10;
// rest1.nbGuests ??= 10;
// rest2.nbGuests ??= 10;
// console.log(rest1, rest2);

//! CHALLENGE
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...PlayersScored) {
    console.log(PlayersScored);
    console.log("Total of goals: ", PlayersScored.length);
  },
};
// console.log("Question 1");
// const {
//   players: [players1, players2],
// } = game;
// console.log(players1);
// console.log(players2);

// console.log("Question 2");
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// console.log("Question 3");
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// console.log("Question 4");
// const players1Final = [...players1, "Thiago", "Cotinho", "Perisic"];
// console.log(players1Final);

// console.log("Question 5");
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// console.log("Question 6");
// game.printGoals(...game.scored);

// console.log("Question 7");
// team1 < team2 && console.log("Team 1 is more likely to win");
// team1 > team2 && console.log("Team 2 is more likely to win");

// ! For of loop

// for (const item of restaurant.mainMenu) console.log(item);
// for (const [i, el] of restaurant.mainMenu.entries()) console.log(`Item n: ${i + 1} est ${el}`);

// ! Optional Chaining
// console.log(restaurant.openingHours?.mon?.open); // Mon doesn't exist

// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? "Closed";
//   if (open == "Closed") {
//     console.log(`On ${day}, we are closed`);
//   } else {
//     console.log(`On ${day}, we open at ${open}`);
//   }
// }

// //* Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderBurger?.(0, 1) ?? "Method does not exist");
// //* Arryas
// const users = [{ name: "Yacine", age: 12 }];
// console.log(users[0]?.name ?? "User doesn't exist");
// console.log(users[3]?.name ?? "User doesn't exist");

//! Looping objects, objects keys, valuesn entries
// const properties = Object.keys(openingHours);
// for (const day of properties) {
//   console.log(day);
// }
/////////////////////////////////////////////////
// const properties = Object.keys(openingHours);
// let openStr = `We are open ${properties.length} days: `;
// for (const day of properties) {
//   openStr += day + " ";
// }
// console.log(openStr);

//* Property values
const values = Object.values(openingHours);

//* Entire Object
const entries = Object.entries(openingHours);

for (const [date, { open, close }] of entries) {
  console.log(`On ${date} we open at ${open} and we close at ${close}`);
}
