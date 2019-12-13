// from data.js
var tableData = data;

// Get a reference to the table body
  var tbody = d3.select("tbody");

function  loadTable(list){
// Use d3 to update each cell's text with
// UFO sighting data values (datetime, city, state, country, shape, durationMinutes, comments)
  list.forEach((data) => {  
      // Use d3 to append one table row `tr` for each UFO sighting object
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
      // Append a cell to the row for each value in the UFO table object
          var cell = row.append("td");
          cell.text(value);
        });
      });
  }

// function call to load data
  loadTable(tableData);
   
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  // collect the filter value from the input box and store the filtered data in a variable
  var filteredData = tableData.filter(data => data.datetime === inputValue);
  console.log(filteredData);

  // delete all the rows from the HTML table
  var myTable = document.getElementById("ufo-table");
  var rowCount = myTable.rows.length;
  for (var x=rowCount-1; x>0; x--) {
    myTable.deleteRow(x);
  }
// function call to load filtered data
  loadTable(filteredData);

});
