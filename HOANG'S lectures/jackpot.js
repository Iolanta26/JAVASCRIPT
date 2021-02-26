let chosenNumber1 = Math.round(Math.random());
let chosenNumber2 = Math.round(Math.random());
let chosenNumber3 = Math.round(Math.random());
let chosenNumber4 = Math.round(Math.random());
let chosenNumber5 = Math.round(Math.random());

console.log(
  chosenNumber1,
  chosenNumber2,
  chosenNumber3,
  chosenNumber4,
  chosenNumber5
);
//Array of numbers
const numbers = [
  chosenNumber1,
  chosenNumber2,
  chosenNumber3,
  chosenNumber4,
  chosenNumber5,
];

//Conditions
if ((result = numbers.every((e) => e > 0))) {
  console.log("Congratulations! You won a jackpot!");
} else if ((result = numbers.every((e) => e < 1))) {
  console.log("No worries, congrats anyway!");
} else {
  console.log();
}

// Probability
console.log("Your probability to win is ", 0.5 ** 5);
