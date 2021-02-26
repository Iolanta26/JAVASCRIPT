function promptMe() {
  let x = prompt("Your number is");
  yourNumber.textContent = x;

  if (x > 0) {
    answer.textContent = "Positive number";
  }

  if (x % 2 === 0) {
    answer2.textContent = "EVEN";
  } else {
    answer2.textContent = "ODD";
  }
}
