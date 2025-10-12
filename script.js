var btn = document.getElementById("showhide");
var contador = 0;

btn.addEventListener("click", function showHide() {
  var projects = document.querySelector("div.projectson");
  var btn = document.getElementById("showhide");
  if (contador == 0) {
    btn.innerHTML = "Ver menos";
   contador += 1
  } else {
    btn.innerHTML = "Ver mais";
    contador = 0;
  }
  projects.classList.toggle("off");

  
  
  
});
