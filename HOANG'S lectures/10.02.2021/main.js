/**
 * Task 6: The array you are given contains all kinds of personal information
 * Filter out all email addresses into a separate array
 * Filter out all phone numbers into a separate array
 * Please don't do it manually :)
 */

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
