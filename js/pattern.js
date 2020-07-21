function printPattern() {
  
  var r = document.getElementById("rows").value;
  console.log(r);

  var selectedPattern = document.getElementById("drop").value;
  console.log(selectedPattern);

    var patternDisplay = document.getElementById("pattern");
    patternDisplay.innerHTML='';

  if (selectedPattern == "Stars") {
    // Star code call / write
    patternDisplay.innerHTML= "Printing *Stars* in Beautiful pattern :";
    for (let i = 0; i < r; i++) {
      let print = "*";
      for (let j = 1; j <= i; j++) {
        print = print + "*";
      }
        console.log(print);
      patternDisplay.innerHTML = patternDisplay.innerHTML + "<br>" + print;
    }
  } 
  else {
    // Numbers code call / write
    patternDisplay.innerHTML = "Printing Numbers in Beautiful pattern :";
    for (let i = 1; i <= r; i++) {
      let print = "";
      for (let j = 1; j <= i; j++) {
        print = print + j;
      }
      console.log(print);
      patternDisplay.innerHTML = patternDisplay.innerHTML + "<br>" + print;
    }
  }
}