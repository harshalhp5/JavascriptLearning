/*const http = new XMLHttpRequest();

http.open("GET", "https://api.lyrics.ovh/v1/toto/africa");
http.send();

http.onload = () => console.log(http.responseText);
*/


const http = new XMLHttpRequest();

http.open("GET", "https://reqres.in/api/users");
http.send();

http.onload = () => {
	
	var body = JSON.parse(http.responseText);
	
	var dataArray = body.data;
	
	for(let i=0;i<dataArray.length;i++){
		console.log(dataArray[i].first_name);
		console.log(dataArray[i].last_name);
		console.log(dataArray[i].email);
		console.log(dataArray[i].avatar);

		var tableDisplay = document.getElementById("getTable");
		var len = tableDisplay.rows.length;

		var row = tableDisplay.insertRow();
  		var cell0 = row.insertCell(0);
  		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		var cell3 = row.insertCell(3);
		var cell4 = row.insertCell(4);
  
  		cell0.innerHTML = len;
  		cell1.innerHTML = dataArray[i].first_name;
  		cell2.innerHTML = dataArray[i].last_name;
		cell3.innerHTML = dataArray[i].email;
		//cell4.innerHTML = <img src='"+ dataArray[i].avatar +"'>;		
		cell4.innerHTML = "<img src='"+ dataArray[i].avatar +"'>";		


	}

}







// https://gorest.co.in/public-api/users?_format=json&access-token=9rgxXqjepGQRM-EtqGoQ7g0EhMznKtUrTK2g
/*
fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/live?timezone=Europe%252FLondon", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": "e3a82e4ac5msh63accbd18dbd315p1a8600jsn04f4b612a3b0"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
}); 

*/