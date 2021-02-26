(function () {
  function executeScript() {
    let table = document.getElementById("myTable");
    let row = table.insertRow(2);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = "s210333";
    cell2.innerHTML = "Sam";
    cell3.innerHTML = 30;
  }

  document.getElementById("addRow").addEventListener("click", executeScript);
})();

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

/// function works in the header part too
