////////DECLARING VARIABLES//////////
const circles = document.querySelectorAll(".circle");
const numberOfCircles = circles.length;
const scoreEl = document.querySelector(".score");
const modal = document.querySelector(".modal");
const result = document.querySelector(".result");
const restartButton = document.querySelector(".restart_button");
const stopButton = document.querySelector(".stop_button");
const startButton = document.querySelector(".start_button");
const gameOverSong = document.getElementById("gameOverSong");
const gameSong = document.getElementById("gameSong");

//// WHEN PAGE IS LOADED////
let score = 0;
let clearTimeoutId;
stopButton.style.visibility = "hidden";

const startGame = () => {
  //// setting visibility to start and end buttons
  startButton.style.visibility = "hidden";
  stopButton.style.visibility = "visible";
  document.querySelector(".circles_container").style.cursor = "pointer";
  gameSong.play();
  //pick a random circle
  let randomNumber = Math.floor(Math.random() * numberOfCircles);
  //initiate the circle
  circles[randomNumber].classList.add("active");

  let previousNumber;
  let timer = 1000;
  let lostGameText = `Sorry! You lose the game! Your final score is`;

  //if the user click on the active circle, update the score
  circles.forEach((circle) => {
    circle.addEventListener("click", () => {
      if (circle.classList.contains("active")) {
        score++;
        scoreEl.textContent = `Your score is: ${score}`;
      } else {
        //user clicks on the wrong circle and game ends
        gameSong.pause();
        stopGame(lostGameText);
        gameOverSong.play();
        if (score < 0) {
          stopGame(lostGameText);
        }
      }
    });
  });

  const timerFunction = () => {
    //If the timer is less than 0, stop the game
    if (timer <= 0) {
      stopGame(lostGameText);
    }
    //update the timer
    timer -= 50;

    //update the random number
    randomNumber = Math.floor(Math.random() * numberOfCircles);
    //check if the random number equals to the previous number, change the current number
    if (randomNumber === previousNumber) {
      if (randomNumber === numberOfCircles - 1) randomNumber = 0;
      randomNumber++;
    }
    //store the random Number
    previousNumber = randomNumber;
    //remove the active state of all circles
    circles.forEach((circle) => circle.classList.remove("active"));
    //add active state to the random circle
    circles[randomNumber].classList.add("active");
    //call the function itself after timer of time
    clearTimeoutId = setTimeout(timerFunction, timer);
  };
  setTimeout(timerFunction, timer);
};

//Event listener on start game button
startButton.addEventListener("click", () => {
  console.log("start game");
  startGame();
});

//function stop the game
const stopGame = (message) => {
  //stop running the circle
  clearTimeout(clearTimeoutId);
  //popup the score
  modal.classList.add("show");
  result.textContent = `${message} ${score}`;
};

//stop the game
stopButton.addEventListener("click", () => {
  stopGame("You stopped the game. Your score is: ");
});

//restart the game
restartButton.addEventListener("click", () => {
  window.location.reload(true);
});
