calculate = () => {
  let salary = Number(document.querySelector("#salary").value);
  let hour = Number(document.getElementById("hour").value);
  let totalSalary = salary * hour;

  if (hour >= 7) {
    document.getElementById("answer").textContent = salary * hour;
  }

  if (hour >= 8 && hour <= 9) {
    document.getElementById("answer").textContent =
      salary * hour + (hour - 7) * (0.5 * salary);
  }

  if (hour > 9) {
    document.getElementById("answer").textContent =
      salary * hour + (hour - 9) * 2 * salary;
  }
};
