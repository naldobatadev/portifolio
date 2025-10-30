//////////-----CONTAINER----/////////
var next = document.querySelector("button#next");
var prev = document.querySelector("button#prev");
var contador = 0;
var pcontainer = document.querySelectorAll("div.pcontainer");
var pcontainerLength = Number(pcontainer.length);

window.onload = carregar();

function carregar() {
  document.getElementById("contador").innerHTML = `${
    contador + 1
  } / ${pcontainerLength}`;
}

function nextcontainer() {
  var pcontainerOn = document.querySelector("div.pcontainer.on");

  pcontainerOn.classList.remove("on");

  if (contador != Number(pcontainerLength + 1)) {
    contador++;
  }
  if (contador == pcontainerLength) {
    contador = 0;
  }

  pcontainer[contador].classList.add("on");

  document.getElementById("contador").innerHTML = `${
    contador + 1
  } / ${pcontainerLength}`;
}

function prevcontainer() {
  var pcontainerOn = document.querySelector("div.pcontainer.on");

  pcontainerOn.classList.remove("on");

  if (contador == 0) {
    contador = pcontainerLength - 1;
  } else {
    contador--;
  }

  pcontainer[contador].classList.add("on");

  document.getElementById("contador").innerHTML = `${
    contador + 1
  } / ${pcontainerLength}`;
}

next.addEventListener("click", nextcontainer);
prev.addEventListener("click", prevcontainer);

/////////////////-------ANIMATIONS---////////////////////////////

const elements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
    }
  });
});

elements.forEach((element) => observer.observe(element));

/////////////////-------CLEAN 'A' NAVBAR---////////////////////////////

window.history.replaceState(null, null, window.location.pathname);

/////////////////-------MENU-MOBILE---////////////////////////////

var btnmenu = document.getElementById("menuiconmobile");
var menu = document.querySelector(".menumobile");

btnmenu.addEventListener("click", () => {
  menu.classList.toggle("off");
});

/////////////////-------REMOVE-MENU-MOBILE---////////////////////////////

var linkmenu = document.querySelectorAll("#linkmobile");
linkmenu[0].addEventListener("click", () => {
  menu.classList.toggle("off");
});

linkmenu[1].addEventListener("click", () => {
  menu.classList.toggle("off");
});

linkmenu[2].addEventListener("click", () => {
  menu.classList.toggle("off");
});

var removemenu = document.getElementById("removemenu");

removemenu.addEventListener("click", () => {
  menu.classList.toggle("off");
});

/////////////////-------RETURN TO TOP---////////////////////////////
var btnreturn = document.getElementById("btnreturn");
window.onscroll = function () {
  toupscroll();
};

function toupscroll() {
  if (
    document.body.scrollTop > 900 ||
    document.documentElement.scrollTop > 900
  ) {
    btnreturn.style.display = "flex";
  } else {
    btnreturn.style.display = "none";
  }
}

btnreturn.addEventListener('click', ()=> {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})
