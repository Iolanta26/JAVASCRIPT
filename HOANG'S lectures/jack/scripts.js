// const message = "Hello world from variable message";

// // console.log(message);

// let chosenNumber = Math.floor(Math.random() * 50);

// // switch (chosenNumber) {
// //   case 1:
// //     console.log("One");
// //     break;
// //   case 2:
// //     console.log("Two");
// //     break;
// //   case 3:
// //     console.log("Three");
// //     break;
// //   case 4:
// //     console.log("Four");
// //     break;
// //   case 5:
// //     console.log("Five");
// //     break;
// //   case 6:
// //     console.log("Six");
// //     break;
// //   default:
// //     console.log("Dont know");
// // }

// if (chosenNumber > 0 && chosenNumber < 32) {
//   console.log("This is a valid for a month", chosenNumber);
// } else {
//   console.log("Invalid date for a month");
// }

//Practice
let chosenNumber = Math.floor(Math.random() * 1 + 1);
var y1 = Math.random();
if (y1 < 0.5) y1 = 0;
else y1 = 1;
// console.log(y1);

let chosenNumber1 = Math.floor(Math.random() * 1 + 1);
var y2 = Math.random();
if (y2 < 0.5) y2 = 0;
else y2 = 1;
// console.log(y2);

let chosenNumber2 = Math.floor(Math.random() * 1 + 1);
var y3 = Math.random();
if (y3 < 0.5) y3 = 0;
else y3 = 1;
// console.log(y3);

let chosenNumber3 = Math.floor(Math.random() * 1 + 1);
var y4 = Math.random();
if (y4 < 0.5) y4 = 0;
else y4 = 1;
// console.log(y4);

let chosenNumber4 = Math.floor(Math.random() * 1 + 1);
var y5 = Math.random();
if (y5 < 0.5) y5 = 0;
else y5 = 1;
// console.log(y5);
console.log(y1, y2, y3, y4, y5);

///Checking if all numbers are 11111
let numbers = [y1, y2, y3, y4, y5];
let result = true;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    result = false;
    break;
  }
}
/// Condition
if (result === true) {
  console.log("Congrats! You have won a jackpot prize!");
} else if (numbers === 0) {
  console.log("Congrats anyway!");
}

console.log("Your probability to win is", 1 / 2 ** 5);
