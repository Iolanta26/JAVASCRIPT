function calculate() {
  let age = prompt("What is your age?");
}
let age;
if (age < 18) {
  answer.textContent = "You are too young";
} else if (age > 18 && age < 27) {
  answer.textContent = "Right age for military service!";
} else if (age > 27 && age < 41) {
  answer.textContent = "You are reserved";
} else if (age > 41 && age < 55) {
  answer.textContent = "You are in backup reserve";
} else {
  answer.textContent = "Too aged!";
}
