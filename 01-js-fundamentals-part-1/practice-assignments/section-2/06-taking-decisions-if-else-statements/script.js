const country = 'Australia';
const continent = 'Oceania';
let population = 26010000 / 1000000;

const isIsland = false;
let language = 'English';

// isIsland = true;

// Basic Operators

/* 1. If your country split in half, and each half would contain half the population, then how many people would live in each half? */
console.log('Half of ' + country + "'s population: " + population / 2);

/* 2. Increase the population of your country by 1 and log the result to the console.
population++; */
console.log(population);

/* 3. Finland has a population of 6 million. Does your country have more people than Finland? */
console.log(population > 6000000);

/* 4. The average population of a country is 33 million people. Does you country have less people than the average country? */
console.log(population < 33000000);

/* 5. Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'. */
// description =
//   country +
//   ' is in ' +
//   continent +
//   ', and its ' +
//   population +
//   ' people speak ' +
//   language +
//   '.';
// console.log(description);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// Taking Decisions: if/else Statements

/* 1. If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population). */
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

/* 2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original. */
