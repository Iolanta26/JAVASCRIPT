// ----> 1 <----
let firstArray = [1, 2, 3, 4, "a", true, false];
let secondArray = ["hello", "I", "am", "not", "an", "array", "jkd"];

//SOLUTION combining two arrays

let thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);

//----> 2 <----
let fourthArray = [1, 500, 10000, 123456, 234, 500, 10000, 12345, 20000];

// SOLUTION
let reverseArray = fourthArray.reverse();
console.log(reverseArray);

//----> 3 <----
let fifthArray = [
  1,
  500,
  10000,
  "world",
  "yeah",
  "bye bye",
  123456,
  234,
  500,
  10000,
  12345,
  20000,
  true,
  true,
  false,
  "hello",
  "world",
];

//SOLUTION only unique values

const yourArrayWithoutDuplicates = [...new Set(fifthArray)];
console.log(yourArrayWithoutDuplicates);

// ----> 4 <----
// sixthArray and seventhArray should be considered as being similar
let sixthArray = [1, 2, 3, "hello", true, false];
let seventhArray = ["hello", false, 1, 3, true, 2];

//SOLUTION
// function return true or false, depending if arrays have common elements
function findSameElements(sixthArray, seventhArray) {
  return sixthArray.some((item) => seventhArray.includes(item));
}
console.log(findSameElements(sixthArray, seventhArray));

// eighthArray and ninthArray are not
let eighthArray = [1, 2, true, false, "hello", 3, "moi moi"];
let ninthArray = [];
// function return true or false, depending if arrays have common elements
function findSameElements(eighthArray, ninthArray) {
  return eighthArray.some((item) => ninthArray.includes(item));
}
console.log(findSameElements(eighthArray, ninthArray)); // might be a sub array case

//----> 5 <----
let tenthArray = [
  "one",
  "two",
  "three",
  1,
  2,
  3,
  false,
  "false",
  [["oh oh"], [[["tom"]], "jerry"], ["not", "again", ["yes", "whynot?", true]]],
];

//SOLUTION

let noNestedArray = tenthArray.flat();
console.log(noNestedArray);

// ----> 6 <----

let peopleInfo = [
  "ron",
  "044 123 345",
  "lonelyspider@email.com",
  "hermione",
  "0123-414-443",
  "hermione@email.com",
  "harry",
  "(0123) 123 4324",
  "ginnyforever@email.com",
];

///// EMAILS FILTERED
let filteredEmails = peopleInfo.filter(function (email) {
  return email.endsWith(".com");
});
console.log(filteredEmails);
//////

/// PHONE NUMBERS FILTERED
let filteredNumber = peopleInfo.filter(function (el) {
  const containNumber = el.split("").some((el) => !Number.isNaN(parseInt(el)));
  if (containNumber) return true;
  return false;
});

console.log(filteredNumber);
///

/// NAMES FILTERED
let filteredNames = peopleInfo.filter(function (el) {
  const containNumber = el.split("").some((el) => !Number.isNaN(parseInt(el)));
  if (containNumber) return false;
  return el.indexOf("@") === -1;
});

console.log(filteredNames);
///

//----> 7 <----
const sample =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, soluta debitis reiciendis recusandae necessitatibus consequatur. Et odit quas quis, nulla sequi voluptatem, impedit optio, illo nihil at distinctio aliquid.";

//SOLUTION

let splitText = sample.split(" ");
console.log(splitText);

let testLetter = splitText.map(function (letter) {
  if (letter.includes("o")) {
    return 1;
  } else {
    return 0;
  }
});

console.log(testLetter);
