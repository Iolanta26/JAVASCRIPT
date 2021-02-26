let formInput = document.querySelector("#inputForm");
let formSearch = document.querySelector("#searchData");

function car(licence, brand, model, price, color) {
  this.licencePlate = licence;
  this.manufacturer = brand;
  this.carModel = model;
  this.carPrice = price;
  this.carColor = color;
}

let carArray = [];

const addCar = (event) => {
  event.preventDefault();
  let licence = document.getElementById("licence").value;
  let brand = document.getElementById("brand").value;
  let model = document.getElementById("model").value;
  let price = document.getElementById("price").value;
  let color = document.getElementById("color").value;
  let newCar = new car(licence, brand, model, price, color);
  carArray.push(newCar);
  console.table(carArray);
  formInput.reset();
};

const searchCar = (event) => {
  event.preventDefault();

  let licence = document.getElementById("searchLicence").value;
  let text = document.querySelector("p");

  if (carArray.length == 0) {
    text.textContent = "Please enter car first";
  } else {
    for (let i = 0; i < carArray.length; i++) {
      if (carArray[i].licencePlate == licence) {
        text.textContent = `Licence number ${carArray[i].licencePlate} is ${carArray[i].manufacturer} ${carArray[i].carModel} `;
      } else {
        text.textContent = "No car found";
      }
    }
  }

  formSearch.reset();
};

const calcDiscount = () => {
  let price = document.getElementById("price").value;
  let disc = document.getElementById("discount");

  if (Number(price) < 5000) {
    disc.textContent = `Discounted price is ${price - price * 0.1} euro`;
  } else if (Number(price) > 20000) {
    disc.textContent = `Discounted price is ${
      Number(price) - Number(price) * 0.25
    } euro`;
  } else {
    disc.textContent = `Discounted price is ${
      Number(price) - Number(price) * 0.15
    } euro`;
  }
};

formSearch.addEventListener("submit", searchCar, calcDiscount);
// formCalculate.addEventListener("submit", calcDiscount);
