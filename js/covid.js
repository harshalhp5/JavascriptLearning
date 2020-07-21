function addData() {

  //call the get request
  var data  = response.body;


  var stateName = document.getElementById("stateName").value;
  console.log(stateName);

  var stateCount = document.getElementById("stateCount").value;
  console.log(stateCount);

  var tableDisplay = document.getElementById("dataTable");
  var len=tableDisplay.rows.length;
    console.log(len);

  var row = tableDisplay.insertRow();
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  
  cell0.innerHTML = len;
  cell1.innerHTML = document.getElementById("stateName").value;
  cell2.innerHTML = document.getElementById("stateCount").value;
}

/*
// Sr.No.
rowCount -> 
rowCount + 1


*/
