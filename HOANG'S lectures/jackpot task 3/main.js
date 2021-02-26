let winningStatus = false;
let roundPlayed = 0;
let jackpotCounter = 0;

const COST_OF_ONE_ROUND = 0.5;
const RANDOMIZE_RANGE = 7;
const JACKPOT_TO_BE_WON = 1000;

while (jackpotCounter < JACKPOT_TO_BE_WON) {
  jackpotCounter++;

  winningStatus = false;

  while (winningStatus === false) {
    roundPlayed++;

    let chosenNumbers = [];

    let counter = 0;

    while (counter < 5) {
      chosenNumbers[counter] = Math.floor(Math.random() * RANDOMIZE_RANGE);
      counter++;
    }

    let oneCounter = 0;
    let zeroCounter = 0;

    counter = 0;

    while (counter < 5) {
      if (chosenNumbers[counter] === 1) {
        // console.log('it is 1')
        oneCounter++;
      } else if (chosenNumbers[counter] === 0) {
        // console.log('it is 0')
        zeroCounter++;
      }

      counter++;
    }

    if (oneCounter === 5) {
      winningStatus = true;
      console.log("Jackpot");
    }
  }
}

console.log(
  `${roundPlayed} rounds have been played until ${JACKPOT_TO_BE_WON} jackpots are won`
);
console.log(
  `${
    roundPlayed * COST_OF_ONE_ROUND
  } EUR was spent to win that ${JACKPOT_TO_BE_WON} jackpots`
);
console.log(
  `${
    (roundPlayed * COST_OF_ONE_ROUND) / JACKPOT_TO_BE_WON
  } EUR was spent on average to win a single jackpot`
);
