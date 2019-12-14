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
  var inputElement1 = d3.select("#datetime");
  var inputElement2 = d3.select("#city");
  var inputElement3 = d3.select("#state");
  var inputElement4 = d3.select("#country");
  var inputElement5 = d3.select("#shape");

  // Get the value property of the input element
  var inputValue1 = inputElement1.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");
  var inputValue5 = inputElement5.property("value");
  
  // collect the filter value from the input box and store the filtered data in a variable
  // var fData1 = tableData.filter(data => data.datetime.toUpperCase() === inputValue1.toUpperCase());
  // var fData2 = fData1.filter(data => data.city.toUpperCase() === inputValue2.toUpperCase());
  // var fData3 = fData2.filter(data => data.state.toUpperCase() === inputValue3.toUpperCase());
  // var fData4 = fData3.filter(data => data.country.toUpperCase() === inputValue4.toUpperCase());
  // var filteredData = fData4.filter(data => data.shape.toUpperCase() === inputValue5.toUpperCase());
  
  var filteredData = tableData.filter(data => (data.datetime.toUpperCase() === inputValue1.toUpperCase() &&
                                              data.city.toUpperCase() === inputValue2.toUpperCase() &&
                                              data.state.toUpperCase() === inputValue3.toUpperCase() &&
                                              data.country.toUpperCase() === inputValue4.toUpperCase() &&
                                              data.shape.toUpperCase() === inputValue5.toUpperCase()));

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
    // var filter = event.target.value.toUpperCase();
    var filter = event.target.value;
    console.log(filter);
      
    var rows = document.querySelector("#ufo-table tbody").rows;
    for (var i = 0; i < rows.length; i++) {
     var firstCol = rows[i].cells[0].textContent;
      var secondCol = rows[i].cells[1].textContent;
      var thirdCol = rows[i].cells[2].textContent;
      var fourthCol = rows[i].cells[3].textContent;
      var fifthCol = rows[i].cells[4].textContent;
      
      if ((firstCol.indexOf(filter) > -1 && index == 0) ||
          (secondCol.indexOf(filter) > -1 && index == 1) ||
          (thirdCol.indexOf(filter) > -1 && index == 2) ||
          (fourthCol.indexOf(filter) > -1 && index == 3) ||
          (fifthCol.indexOf(filter) > -1 && index == 4)
      )
       {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }  
               
    }
  }

  document.querySelectorAll('input.form-control').forEach(function(el,idx){
    el.addEventListener('keyup', function(e){
      console.log(e,idx)
      filterTable(e, idx);
    }, false);
  });

    
function camelCasetxt(txt){
    return txt.charAt(0).toUpperCase() + 
    txt.substr(1).toLowerCase();
}
   


 