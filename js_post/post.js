var json = {
            name:"morpheus",
            job:"leader"
        };

var http = new XMLHttpRequest();
var url = 'https://reqres.in/api/users';
//var params = 'orem=ipsum&name=binny';
http.open('POST', url);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/json');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 201) {
        console.log(http.responseText);
    }
}

http.send(JSON.stringify(json));