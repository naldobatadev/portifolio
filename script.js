var btn = document.getElementById("showhide");
var contador = 0;

btn.addEventListener("click", function showHide() {
  var projects = document.querySelectorAll("div.projects");
  var btn = document.getElementById("showhide");

  projects[1].classList.toggle("off");
  projects[2].classList.toogle("off");
  if (contador == 0) {
    btn.innerHTML = "Ver menos";
   contador += 1
  } else {
    btn.innerHTML = "Ver mais";
    contador = 0;
  }
  
  
});
