var secret_object = $.getJSON("js/secrets.json", function(json) {
  return json;
});

console.log(secret_object.status);
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.500px.com/v1/users/16754059/galleries/22707459/items/?consumer_key=" + consumer_key, false);
//xhr.send();
console.log(xhr.status);

var iDiv = document.createElement('div');
var response_body = JSON.parse(xhr.response);
iDiv.textContent = response_body["photos"][0]["image_url"];
//iDiv.textContent = response_body["photos"][0]["image_url"];
document.getElementsByTagName('body')[0].appendChild(iDiv);
