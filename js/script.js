var json_req = new XMLHttpRequest();
json_req.open("GET", "js/secrets.json", false);
json_req.send();

consumer_key = JSON.parse(json_req.responseText)["consumer_key"]

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.500px.com/v1/users/16754059/galleries/22707459/items/?consumer_key=" + consumer_key, false);
xhr.send();

var iDiv = document.createElement('div');
var response_body = JSON.parse(xhr.response);
var random_num = Math.floor(Math.random() * response_body["photos"].length);

var css = "body { background-image: url('https://500px.com" + response_body["photos"][random_num]["url"] + "'); background-size:100%;",
head = document.head || document.getElementsByTagName('head')[0],
style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
