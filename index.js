var myNav = document.getElementById('mynav');
var mydropdown = document.getElementById('mydropdown')
window.onscroll = function () { 
  "use strict";
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
      myNav.classList.add("nav-colored");
      myNav.classList.remove("nav-transparent");
      mydropdown.classList.add("dropdown-colored");
      mydropdown.classList.remove("dropdown-transparent");
  } 
  else {
      myNav.classList.add("nav-transparent");
      myNav.classList.remove("nav-colored");
      mydropdown.classList.add("dropdown-transparent");
      mydropdown.classList.remove("dropdown-colored");
  }

};
function changeBackground() {
  var x = document.getElementById("mynav");
  var c = window.getComputedStyle(x).backgroundColor;
  if (c == "rgba(0, 0, 0, 0)") {
    document.getElementById("mynav").style.background = "#000";
  } else {
    document.getElementById("mynav").style.background = "rgba(0, 0, 0, 0)";
  }
}


