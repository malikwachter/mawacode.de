

var fullpic = document.getElementById("fullpic")

if(window.location.href.indexOf("desktop") > -1){
  fullpic.innerHTML+="<img src= 'pics/desktop-fullres.png'>";
}
if(window.location.href.indexOf("laptop") > -1){
  fullpic.innerHTML+="<img src= 'pics/laptop-fullres.png'>";
}


// Popup on Contact page
var Popup = document.getElementById("myPopup");
var btn = document.getElementById("popupButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  Popup.style.display = "block";
}

span.onclick = function() {
  Popup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == Popup) {
    Popup.style.display = "none";
  }
}