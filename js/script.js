var oReq = new XMLHttpRequest();
oReq.open("get", "secrets.json", false);
oReq.send();
var consumer_key = JSON.parse(oReq.response)["consumer_key"]
console.log(consumer_key)

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.500px.com/v1/users/16754059/galleries/22707459/items/?consumer_key=" + consumer_key, false);
//xhr.send();
console.log(xhr.status);

var iDiv = document.createElement('div');
var response_body = JSON.parse(xhr.response);
iDiv.textContent = response_body["photos"][0]["image_url"];
//iDiv.textContent = response_body["photos"][0]["image_url"];
document.getElementsByTagName('body')[0].appendChild(iDiv);
