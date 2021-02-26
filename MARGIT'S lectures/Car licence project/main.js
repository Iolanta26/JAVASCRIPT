let text = document.querySelector("p");

let car = {
  type: "Audi",
  year: 2015,
  owner: "John Melter",
  city: "London",
  //   calcAge: function () {
  //     this.age = 2021 - this.year;
  //     return this.age;
  //   },

  calcAge: () => {
    this.age = 2021 - this.year;
    return this.age;
  },
};

console.log(car);
console.log(car.year);
console.log(car.city);
car.city = "Helsinki";
console.log(car);

car.color = "red";
console.log(car);

delete car.city;

console.log(car);

text.textContent = ` Your car is ${car.type}, the year is ${
  car.year
}, and the color is ${car.color}. The age of the car is ${car.calcAge()} years`;

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

var myFather = new Person("Sam", "Smith", 50, "blue");
console.log(myFather);
