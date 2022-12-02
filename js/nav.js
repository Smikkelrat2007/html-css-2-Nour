const nav1 = document.getElementById("link1");
const nav1_5 = document.getElementById("link1.5");
const nav2 = document.getElementById("link2");
const nav3 = document.getElementById("link3");
const nav4 = document.getElementById("link4");

nav1.onmouseover = function () {
  nav1.innerHTML =
    "|home|";
};
nav1.onmouseout = function () {
  nav1.innerHTML =
    "home";
};
nav1_5.onmouseover = function () {
  nav1_5.innerHTML =
    "|rooster|";
};
nav1_5.onmouseout = function () {
  nav1_5.innerHTML =
    "rooster";
};
nav2.onmouseover = function () {
  nav2.innerHTML =
    "|badges|";
};
nav2.onmouseout = function () {
  nav2.innerHTML =
    "badges";
};
nav3.onmouseover = function () {
  nav3.innerHTML =
    "|projecten|";
};
nav3.onmouseout = function () {
  nav3.innerHTML =
    "projecten";
};
nav4.onmouseover = function () {
  nav4.innerHTML =
    "|contact|";
};
nav4.onmouseout = function () {
  nav4.innerHTML =
    "contact";
};
