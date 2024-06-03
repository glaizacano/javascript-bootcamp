/* let js = 'amazing';
// if (js === 'amazing') alert('JavaScript is FUN!');

// 40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); 

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

var job = 'programmer';
job = 'teacher';

// incorrect way of creating variables
lastName = 'Schmedtmann';
console.log(lastName);

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <. >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018); */

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(now - 1991 > now - 2018);

// // console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10, y = 10
// console.log(x, y);

// console.log(ageJonas);
// console.log(ageSarah);

// const averageAge = (ageJonas + ageJonas) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// // String concatenation
// const jonas =
//   "I'm " + firstName + ', a ' + (year - birthYear) + '-year-old ' + job + '!';
// console.log(jonas);

// // Template strings
// const jonasNew = `I'm ${firstName}, a ${year - birthYear}-year-old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log(`String with \n\
// multiple \n\
// lines`);

// console.log(`String
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start her driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// // Type Conversion and Coercion

// // Type Conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear); // 1991, '1991'
// console.log(Number(inputYear) + 18); // 2009

// console.log(Number('Jonas')); // NaN
// console.log(typeof NaN); // number

// console.log(String(23), 23); // '23', 23

// // Type Coercion
// console.log('I am ' + 23 + ' years old'); // 'I am 23 years old'
// console.log('23' - '10' - 3); // 10
// console.log('23' + '10' + 3); // 23103
// console.log('23' * '2'); // 46
// console.log('23' / '2'); // 11.5

// let n = '1' + 1; // concatenates number with string; n = '11'
// n = n - 1; // n = '11' - 1
// console.log(n); // n = 10

// let j = 2 + 3 + 4 + '5';
// console.log(j); // j = '95'

// let k = '10' - '4' - '3' - 2 + '5';
// console.log(k); // k = '15'

// Truthy and Falsy Values
// console.log(Boolean(0)); // -> false
// console.log(Boolean(undefined)); //false
// console.log(Boolean('Jonas')); // -> true
// console.log(Boolean({})); // -> true
// console.log(Boolean('')); // -> false

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log('You should get a job!');
// }

// let height = 0;
// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // '23' == 23
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');
