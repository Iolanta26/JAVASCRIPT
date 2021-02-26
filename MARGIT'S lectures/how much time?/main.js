function calcDays() {
  let event = document.getElementById("eventName").value;
  let eventDate = document.getElementById("endDate").value;

  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  let endDate = new Date(eventDate);

  differenceInTime = endDate.getTime() - today.getTime();
  differenceInDays = differenceInTime / (1000 * 3600 * 24);
  const finalResult = differenceInDays.toFixed(0);

  let workDays = Math.floor(finalResult / 7);
  const businessDays = finalResult - workDays * 2;

  document.getElementById(
    "calcText"
  ).innerHTML = `There are ${finalResult} days / ${businessDays} business days left until ${event} `;

  let countDownDate = new Date(eventDate).getTime();
  let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(
      "h3"
    ).innerHTML = `Real-time counter until your event`;
    document.getElementById("day").innerHTML = `${days} days`;
    document.getElementById("hour").innerHTML = `${hours} hours`;
    document.getElementById("minute").innerHTML = `${minutes} minutes`;
    document.getElementById("second").innerHTML = `${seconds} seconds`;
  });
}
document.getElementById("endDateButton").addEventListener("click", calcDays);

function newDateCalculation() {
  let newDate = document.getElementById("startDate").value;
  let eventDate = document.getElementById("endDate").value;
  let event = document.getElementById("eventName").value;

  let setDate = new Date(newDate);
  let endDate = new Date(eventDate);

  differenceInTime = endDate.getTime() - setDate.getTime();
  differenceInDays = differenceInTime / (1000 * 3600 * 24);
  result = differenceInDays.toFixed(0);

  let workingDays = Math.floor(result / 7);
  const bsnDays = result - workingDays * 2;

  document.getElementById(
    "startDateText"
  ).innerHTML = `There are ${result} days / ${bsnDays} working days left until ${event}`;
}
document
  .getElementById("newDateButton")
  .addEventListener("click", newDateCalculation);
