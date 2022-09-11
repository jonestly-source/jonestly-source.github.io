let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

/*document.onreadystatechange = (event) => {
 if (document.readyState === "interactive") {
  loadUser();
 }
};*/

function info(alertInfo) {
 var timeleft = null;
 var dim = document.getElementById("dim");
 var bubble = document.getElementById("alert");
 var alertText = document.getElementById("alert-text");
 alertText.textContent = alertInfo;
 bubble.style.display = "block";
 dim.style.display = "block";
 clearTimeout(timeleft);
 timeleft = setTimeout(function () {
  bubble.style.display = "none";
  dim.style.display = "none";
 }, 1500);
}

function loading(btnId) {
 btnId.innerHTML = '<span id="loading"></span>';
 btnId.style = "background-color: #404040;";
 var elem = document.querySelectorAll(
  "#content input, #content button, #content a, #content textarea, #content textarea"
 );
 for (var dis of elem) {
  dis.disabled = true;
  //dis.style = "pointer-events: none; cursor: default;"
 }
}

function unload(btnId, txtCntnt) {
 btnId.innerHTML = txtCntnt;
 btnId.style = "background-color: #000000;";
 var elem = document.querySelectorAll(
  "#content input, #content button, #content a, #content textarea"
 );
 for (var dis of elem) {
  dis.disabled = false;
  //dis.style = "pointer-events: auto; cursor: auto;"
 }
}

function deletebox(al, black) {
 let alertbox = document.getElementById("alertbox");
 var dim = document.getElementById("dim");

 alertbox.style.display = al;
 dim.style.display = black;
}

function loadUser() {
 var dim = document.getElementById("dim");
 var span = document.createElement("span");

 span.setAttribute("id", "docloading");
 let textCont = "Loading";
 dim.appendChild(span);
 span.after(textCont);
 dim.style.display = "flex";
 dim.style.opacity = 1;
 dim.style.backgroundColor = "white";
}

function unloadUser() {
 var dim = document.getElementById("dim");
 var intervalId = setInterval(hide, 20);
 var opac = 0;
 /**/

 function hide() {
  opac = Number(window.getComputedStyle(dim).getPropertyValue("opacity"));
  if (opac > 0) {
   opac = opac - 0.1;
   dim.style.opacity = opac;
  } else {
   clearInterval(intervalId);
   dim.innerHTML = "";
   dim.style.display = "none";
   dim.style.opacity = 0.5;
   dim.style.backgroundColor = "black";
  }
 }
}

function clear() {
 var elem = document.querySelectorAll("#content input, #content textarea");
 for (var dis of elem) {
  dis.value = "";
  //dis.style = "pointer-events: auto; cursor: auto;"
 }
}
