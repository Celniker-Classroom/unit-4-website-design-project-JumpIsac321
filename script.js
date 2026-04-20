// add javascript here
darkmode = false;

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  darkmode = !darkmode;
  if (darkmode){
    document.getElementById("darkicon").src = "image/sunicon.png"
  } else {
    document.getElementById("darkicon").src = "image/moonicon.png"
  }
}

function toggleAnswer() {
  const answerDiv = document.getElementById("answer");
  console.log(answerDiv.style.display);
  if (answerDiv.style.display === "none"){
    answerDiv.style.display = "inline";
  } else {
    answerDiv.style.display = "none";
  }
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.fontSize = "10px";
    document.getElementById("darkicon").style.width = "29px";
    document.getElementById("darkicon").style.height = "29px";
  } else {
    document.getElementById("navbar").style.fontSize = "16px";
    document.getElementById("darkicon").style.width = "35px";
    document.getElementById("darkicon").style.height = "35px";
  }
}