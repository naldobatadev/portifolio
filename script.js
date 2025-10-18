var btnMenu = document.getElementById("btnmenu");
btnMenu.addEventListener("click", function (e) {
  var Menu = document.querySelector("div.menu")
  Menu.classList.toggle("off");
  e.stopPropagation()
});

///AO CLICAR FORA FECHA
document.addEventListener("click", function (e) {
  var Menu = document.querySelector("div.menu");
  var btnMenu = document.getElementById("btnmenu");

  if (!Menu.classList.contains("off") && !Menu.contains(e.target) && !btnMenu.contains(e.target)) {
    Menu.classList.add("off");
  }})

////////////////////////////////////
var next = document.querySelector("button#next");
var prev = document.querySelector("button#prev");
var contador = 0;
var pcontainer = document.querySelectorAll("div.pcontainer");
var pcontainerLength = Number(pcontainer.length);

window.onload = carregar();

function carregar() {
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
///////////////////////////

var nextmobile = document.querySelector("button#nextmobile");
var prevmobile = document.querySelector("button#prevmobile");
var contadormobile = 0;
var pcontainermobile = document.querySelectorAll("div.pcontainermobile");
var pcontainermobileLength = Number(pcontainermobile.length);

window.onload = carregar();

function carregar() {
  document.getElementById("contador").innerHTML = `0${
    contadormobile + 1
  } / 0${pcontainermobileLength}`;
}

nextmobile.addEventListener("click", function () {
  var pcontainermobileOn = document.querySelector("div.pcontainermobile.on");

  pcontainermobileOn.classList.remove("on");

  if (contadormobile != Number(pcontainermobileLength + 1)) {
    contadormobile++;
  }
  if (contadormobile == pcontainermobileLength) {
    contadormobile = 0;
  }

  pcontainermobile[contadormobile].classList.add("on");

  document.getElementById("contador").innerHTML = `0${
    contadormobile + 1
  } / 0${pcontainermobileLength}`;
});

prevmobile.addEventListener("click", function () {
  var pcontainermobileOn = document.querySelector("div.pcontainermobile.on");

  pcontainermobileOn.classList.remove("on");

  if (contadormobile == 0) {
    contadormobile = pcontainermobileLength - 1;
  } else {
    contadormobile--;
  }

  pcontainermobile[contadormobile].classList.add("on");

  document.getElementById("contador").innerHTML = `0${
    contadormobile + 1
  } / 0${pcontainermobileLength}`;
});


///////////////////////////////////////






var nextmobile = document.querySelector("button#nextmobileum");
var prevmobile = document.querySelector("button#prevmobileum");
var contadormobile = 0;
var pcontainermobile = document.querySelectorAll("div.pcontainermobile");
var pcontainermobileLength = Number(pcontainermobile.length);

window.onload = carregar();

function carregar() {
  document.getElementById("contador").innerHTML = `0${
    contadormobile + 1
  } / 0${pcontainermobileLength}`;
}

nextmobile.addEventListener("click", function () {
  var pcontainermobileOn = document.querySelector("div.pcontainermobile.on");

  pcontainermobileOn.classList.remove("on");

  if (contadormobile != Number(pcontainermobileLength + 1)) {
    contadormobile++;
  }
  if (contadormobile == pcontainermobileLength) {
    contadormobile = 0;
  }

  pcontainermobile[contadormobile].classList.add("on");

  document.getElementById("contador").innerHTML = `0${
    contadormobile + 1
  } / 0${pcontainermobileLength}`;
});

prevmobile.addEventListener("click", function () {
  var pcontainermobileOn = document.querySelector("div.pcontainermobile.on");

  pcontainermobileOn.classList.remove("on");

  if (contadormobile == 0) {
    contadormobile = pcontainermobileLength - 1;
  } else {
    contadormobile--;
  }

  pcontainermobile[contadormobile].classList.add("on");

  document.getElementById("contador").innerHTML = `0${
    contadormobile + 1
  } / 0${pcontainermobileLength}`;
});

