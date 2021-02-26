calculate = () => {
  let weight = Number(document.querySelector("#weight").value);
  let height = Number(document.getElementById("height").value);

  let bmi = weight / (height * height);

  document.getElementById("answer").textContent = bmi;

  if (bmi < 18.5) {
    document.getElementById("answer2").textContent = "Underweight";
  } else if (bmi > 18.5 && bmi < 24.9) {
    document.getElementById("answer2").textContent = "Healthy weight";
  } else if (bmi > 25 && bmi < 29.9) {
    document.getElementById("answer2").textContent = "Overweight";
  } else if (bmi > 30) {
    document.getElementById("answer2").textContent = "Obese";
  }
};
