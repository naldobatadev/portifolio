var contador = 0;
var btn = document.getElementById("btn");
var btnPrev = document.getElementById("prev");

btn.addEventListener(
  "click",

  function mudar() {
    var containerActive = document.querySelector("div.container.active");
    var container = document.querySelectorAll("div.container");

    if (contador == 0 || contador == 1) {
      contador++;
    } else {
      contador = 0;
    }

    containerActive.classList.remove("active");
    container[contador].classList.add("active");
  }
);

btnPrev.addEventListener("click", function prev() {
  var containerActive = document.querySelector("div.container.active");
  var container = document.querySelectorAll("div.container");

  if (contador == 0) {
    contador = 2;
  } else {
    contador--;
  }

  containerActive.classList.remove("active");
  container[contador].classList.add("active");
});
