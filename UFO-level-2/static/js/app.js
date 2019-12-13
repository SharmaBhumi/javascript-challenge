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
          if (key==="city" || key==="shape"){
              var val=camelCasetxt(value);
              cell.text(val);
          }
          else if(key==="state" || key==="country"){cell.text(value.toUpperCase());}
          else {cell.text(value);}
       
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

// =========
// function performReset() {
//     document.getElementById("inputName").value = "";
//     document.getElementById("inputCity").value = "";
//     document.getElementById("inputCountry").value = "";
//     filterTable(event, 0);
//   }
  
  function filterTable(event, index) {
    var filter = event.target.value.toUpperCase();
    var rows = document.querySelector("#ufo-table tbody").rows;
    for (var i = 0; i < rows.length; i++) {
      var firstCol = rows[i].cells[0].textContent.toUpperCase();
      var secondCol = rows[i].cells[1].textContent.toUpperCase();
      var thirdCol = rows[i].cells[2].textContent.toUpperCase();
      var fourthCol = rows[i].cells[3].textContent.toUpperCase();
      var fifthCol = rows[i].cells[4].textContent.toUpperCase();
      
      console.log(firstCol);
      if ((firstCol.indexOf(filter) > -1 && index == 0) || 
      (secondCol.indexOf(filter) > -1 && index == 1) || 
      (thirdCol.indexOf(filter) > -1 && index == 2) ||
      (fourthCol.indexOf(filter) > -1 && index == 3) ||
      (fifthCol.indexOf(filter) > -1 && index == 4)) 
      {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }      
    }
  }

  document.querySelectorAll('input.form-control').forEach(function(el,idx){
    el.addEventListener('keyup', function(e){
      filterTable(e, idx);
    }, false);
  });

    
function camelCasetxt(txt){
    return txt.charAt(0).toUpperCase() + 
    txt.substr(1).toLowerCase();
}
   


 