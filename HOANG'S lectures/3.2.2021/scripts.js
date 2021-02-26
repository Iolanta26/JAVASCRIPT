const NUMBER_OF_BULBS = 20;
const DELAY = 100;

let counter = 0;
let arrayOfBulbs = [];

//creating the bulbs
while (counter < NUMBER_OF_BULBS) {
  const newEl = document.createElement("div");
  newEl.className = "bulb";
  document.getElementById("bulbs").appendChild(newEl);

  arrayOfBulbs[counter] = false;
  counter++;
}

//reset the pointerback to the first bulb

counter = 0;
arrayOfBulbs[counter] = true; //initial bulb

setInterval(() => {
  //switch off the current bulb
  arrayOfBulbs[counter] = false;
  document.getElementsByClassName("bulb")[counter].classList.remove("active");

  //unless it is already the last bulb
  if (counter < NUMBER_OF_BULBS - 1) {
    counter++; //get the next bulb in the array
    // arrayOfBulbs[counter] = true;
  } else {
    counter = 0; //reset
    // arrayOfBulbs[counter] = true;
  }

  arrayOfBulbs[counter] = true;
  document.getElementsByClassName("bulb")[counter].classList.add("active");

  console.log();
  console.log(arrayOfBulbs);
}, DELAY);

const arrangeItems = (nodes) => {
  const radius = "12em",
    start = -90,
    $els = [...nodes],
    numberOfEls = $els.length,
    slice = 360 / numberOfEls,
    index = 0;

  $els.forEach((el, i) => {
    const rotate = slice * i + start;
    const rotateReverse = rotate * -1;

    el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
  });
};
