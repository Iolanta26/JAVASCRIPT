// function calculate() {
//   let price = Number(document.querySelector("#price").value);
//   let money = Number(document.getElementById("money").value);
//   let answer = document.getElementById("answer");

//   answer.textContent = money / price;
// }

//Array function
calculate = () => {
  let price = Number(document.querySelector("#price").value);
  let money = Number(document.getElementById("money").value);
  let answer = document.getElementById("answer");
  let liters = money / price;

  let text;

  let solution = document.getElementById("solution");

  answer.textContent = Math.floor(liters);

  liters >= 10
    ? (text = "Good, now you can escape")
    : (text = "Ups, you have to stay here");
  solution.textContent = text;
};

// if (answer > 25) {
//   ifelse.textContent = "Good! You can escape now";
// } else {
//   ifelse.textContent = "Ops! You have to stay here";
// }

/*function hello() {
  alert("Hello! My name is Iolanta");
  whoareyou();
}

function whoareyou() {
  let yourname = prompt("What is your name?");
  greeting(yourname);
}

function greeting(name) {
  document.write(name);
}

hello();
*/
