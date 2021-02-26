function pick() {
  let number1 = prompt("Number 1?");
  let number2 = prompt("Number 2?");
  let number3 = prompt("Number 3?");

  let numbers = [Number(number1), Number(number2), Number(number3)];

  nums.textContent = numbers;

  let multiplication = Number(number3) * Number(number2) * Number(number1);

  let sum = Number(number3) + Number(number2) + Number(number1);

  if (Number(number3) >= 0 && Number(number2) >= 0 && Number(number3) >= 0) {
    answer.textContent = multiplication;
  }

  if (Number(number1) >= 0 || Number(number2) >= 0 || Number(number3) >= 0) {
    answer2.textContent = sum;
  }

  if (Number(number1) < 0 && Number(number2) < 0 && Number(number3) < 0) {
    answer3.textContent = "All negatives";
  }
}
