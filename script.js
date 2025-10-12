/*

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


*/

var next = document.querySelector("button#next");
var prev = document.querySelector("button#prev");
var contador = 0;
var pcontainer = document.querySelectorAll("div.pcontainer");
var pcontainerLength = Number(pcontainer.length);

window.onload = carregar()

function carregar(){
  document.getElementById("contador").innerHTML = `0${
    contador + 1
  } / 0${pcontainerLength}`;
}

next.addEventListener("click", function () {
  var pcontainerOn = document.querySelector("div.pcontainer.on");

  pcontainerOn.classList.remove("on");

  if (contador != Number(pcontainerLength + 1)) {
    contador++;
  }
  if (contador == pcontainerLength) {
    contador = 0;
  }

  pcontainer[contador].classList.add("on");

  document.getElementById("contador").innerHTML = `0${
    contador + 1
  } / 0${pcontainerLength}`;
});

prev.addEventListener("click", function () {
  var pcontainerOn = document.querySelector("div.pcontainer.on");

  pcontainerOn.classList.remove("on");

  if (contador == 0) {
    contador = pcontainerLength - 1;
  } else {
    contador--;
  }

  pcontainer[contador].classList.add("on");

  document.getElementById("contador").innerHTML = `0${
    contador + 1
  } / 0${pcontainerLength}`;
});
