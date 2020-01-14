//get tray
var tray = document.getElementsByClassName("mainnav-toggle")[0];
if (tray.getAttribute("title")==="Expand"){
  tray.style.backgroundColor = "yellow";
}

var rc = document.getElementById("menu_rollcall");
rc.style.backgroundColor = "yellow";
rc.children[1].children[1].style.backgroundColor = "yellow";

var fg = document.getElementsByClassName("form-group");
fg[fg.length-1].style.backgroundColor = "yellow";
