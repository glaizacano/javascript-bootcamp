// The Conditional (Ternary) Operator

const country = 'Australia';
const continent = 'Oceania';
let population = 26010000 / 1000000;

const isIsland = false;
let language = 'English';

// 1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

// 2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

// population = 13; // 13 million
// population = 130; // 130 million

console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);
