const circles = document.querySelectorAll(".circle");
const numberOfCircles = circles.length;
const scoreEl = document.querySelector(".score");
const modal = document.querySelector(".modal");
const result = document.querySelector(".result");
const restartButton = document.querySelector(".restart_button");
const stopButton = document.querySelector(".stop_button");
let score = 0;
let clearTimeoutId;
document.querySelector(".stop_button").style.visibility = "hidden";

const startGame = () => {
  //// settingg visibility to start and end buttons
  document.querySelector(".start_button").style.visibility = "hidden";
  document.querySelector(".stop_button").style.visibility = "visible";
  document.querySelector(".circles_container").style.cursor = "pointer";
  //pick a random circle
  let randomNumber = Math.floor(Math.random() * numberOfCircles);
  //initiate the circle
  circles[randomNumber].classList.add("active");

  let previousNumber;
  let timer = 1000;

  //if the user click on the active circle, update the score
  circles.forEach((circle) => {
    circle.addEventListener("click", () => {
      if (circle.classList.contains("active")) {
        score++;
        scoreEl.textContent = `Your score is: ${score}`;
      } else {
        //user clicks on the wrong circle and game ends
        stopGame("Sorry You Lose!!! Your Final Score is: ");
        scoreEl.textContent = `Your score is: ${score}`;
        if (score < 0) {
          stopGame("Sorry You Lose!!! Your Final Score is: ");
        }
      }
    });
  });

  const timerFunction = () => {
    //If the timer is less than 0, stop the game
    if (timer <= 0) {
      stopGame("Sorry you lose!! Your Final Score is: ");
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
const startButton = document.querySelector(".start_button");
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
  stopGame("You Stop The Game. Your Final Score is: ");
});

//restart the game
restartButton.addEventListener("click", () => {
  window.location.reload(true);
});
