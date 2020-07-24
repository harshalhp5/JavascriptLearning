function createData(){
var name = document.getElementById("name").value;
var job = document.getElementById("job").value;
var printData = document.getElementById("print");
var json = {
    name :name,
    job : job,
};

var http = new XMLHttpRequest();
var url = 'https://reqres.in/api/users';
http.open('POST', url);
http.setRequestHeader('Content-type', 'application/json');

http.onreadystatechange = function() {

    if(http.readyState == 4 && http.status == 201) {
        //We use json parse to convert the string response to json object
        // We convert data to json object because we can easily access the values from json object
        var body = JSON.parse(http.responseText);
        console.log(body.id);
        console.log(body.createdAt);

        printData.innerHTML = `<br><br>The Data was successfully Logged to the Server` + '<br>' ;
        
        printData.innerHTML = printData.innerHTML + 'The Data was saved with ID : ' + body.id + '<br>';

        printData.innerHTML = printData.innerHTML + 'The Data was created at : ' +  body.createdAt ;

    }
}

http.send(JSON.stringify(json));



}
