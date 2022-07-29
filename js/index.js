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

function loading(btnId){
 btnId.innerHTML = '<span id="loading"></span>';
 btnId.style = "background-color: #404040;";
 btnId.disable
}

function unload(btnId, txtCntnt){
 btnId.innerHTML = txtCntnt;
 btnId.style = "background-color: #000000;";
 btnId.enable
}
