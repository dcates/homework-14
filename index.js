
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dateinput");
var $cityInput = document.querySelector("#cityinput");
var $searchBtn = document.querySelector("#search");

$searchBtn.addEventListener("click", handleSearchButtonClick);

var filterdate = sightings;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filterdate.length; i++) {

    var dateTime = filterdate[i];
    var fields = Object.keys(dateTime);
    var city = filterdate[i];
    var fields = Object.keys(dateTime);

    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
     
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = dateTime[field];
    }
  }
}

function handleSearchButtonClick() {

  var filterState = $dateInput.value.trim().toLowerCase();

  filterdate = sightings.filter(function(dateTime) {
    var marsDate = dateTime.datetime.toLowerCase();


    return marsDate === filterState;
  });
  renderTable();
}


renderTable();


