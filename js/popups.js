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