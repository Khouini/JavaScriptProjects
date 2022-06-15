"use strict";
//! Parsing arguments | Values vs references
// const car = "BMW E39";
// const yacine = {
//   name: "Yacine Khouini",
//   age: 20,
// };

// function manage(person, karhba) {
//   person.age = 90; // The object change
//   karhba = "Clio bombé"; // car does not change
// }

// manage(yacine, car);
// console.log(car, yacine); // car does not change and the object change

//! The CallBack function / Higher level function / Abstraction
// function upperFirstWord(str) {
//   const [first, ...others] = str.toLowerCase().split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// }
// function oneWord(str) {
//   return str.replaceAll(" ", "").toLowerCase();
// }
// function tasnformer(str, fct) {
//   console.log("Original string: ", str);
//   console.log("Transformed string: ", fct(str));
//   console.log("Transformed by: ", fct.name);
// }
// tasnformer("meD YAcine KHouinI", upperFirstWord);
// console.log("**************");
// tasnformer("meD YAcine KHouinI", oneWord);

//! Functions returning functions
// function greet(greeting) {
//   return function (name) {
//     console.log(greeting, name);
//   };
// }
// * 1ére méthode d'appel
// const fctHeyName = greet("Hey");
// fctHeyName("Yacine");
// * 2éme méthode d'appel
// greet("Hey")("Yacine");

// //! Call and apply methodes
const tunis = {
  airline: "TUNISAIR",
  iataCode: "TUN",
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const Paris = {
  airline: "PARISAIR",
  iataCode: "PAR",
  bookings: [],
};
tunis.book(23, "Yacine Khouini");
tunis.book(235, "Trukns Khouini");

//* Call Method
tunis.book.call(Paris, 678, "Hatem Khouini");

//* Apply Method
const data = [123, "Flen Foulnei"];
tunis.book.apply(Paris, data);
tunis.book.call(Paris, ...data);
//* For testing
console.log("Tunis", tunis.bookings);
console.log("Paris", Paris.bookings);
