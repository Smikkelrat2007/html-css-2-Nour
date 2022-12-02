
function counting()
{
  reload = document.getElementById("reload")
  var today = new Date();

  var hour = today.getHours();
  if (hour<10)hour = "0"+hour;
  var minut = today.getMinutes();
  if (minut<10)minut = "0"+minut;
  var second = today.getSeconds();
  if (second<10)second = "0"+second;

  reload.innerHTML =
  +hour+":"+minut+":"+second;
  reload.style.textAlign = "center"
  reload.style.color = "var(--color5)"
  reload.style.width = "100%"
  reload.style.paddingTop = "20px"
  setTimeout('counting()',1000);
};
