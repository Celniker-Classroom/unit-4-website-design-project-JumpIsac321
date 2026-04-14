// add javascript here
darkmode = false;

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  darkmode = !darkmode;
  if (darkmode){
    document.getElementById("darkicon").src = "/image/sunicon.png"
  } else {
    document.getElementById("darkicon").src = "/image/moonicon.png"
  }
}