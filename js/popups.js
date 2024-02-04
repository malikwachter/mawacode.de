// Get the Popup
var Popup = document.getElementById("myPopup");

// Get the button that opens the Popup
var btn = document.getElementById("popupButton");

// Get the <span> element that closes the Popup
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the Popup 
btn.onclick = function() {
  Popup.style.display = "block";
}

// When the user clicks on <span> (x), close the Popup
span.onclick = function() {
  Popup.style.display = "none";
}

// When the user clicks anywhere outside of the Popup, close it
window.onclick = function(event) {
  if (event.target == Popup) {
    Popup.style.display = "none";
  }
}