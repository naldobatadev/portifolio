var antes = document.querySelector("div#antes");
var depois = document.querySelector("div#depois");
var showContainer = document.querySelectorAll("div.content");
var showPonto = document.querySelectorAll("div.ponto");
var nr = 0;

function next(){

  if (nr == 2) {
    nr = 0;

    document.querySelector(".content.active").classList.remove("active");
    showContainer[nr].classList.add("active");

    document.querySelector(".ponto.active").classList.remove("active");
    showPonto[nr].classList.add("active");
  } else {
    document.querySelector(".content.active").classList.remove("active");
    nr += 1;
    showContainer[nr].classList.add("active");

    document.querySelector(".ponto.active").classList.remove("active");
    showPonto[nr].classList.add("active");
  }



  document.getElementById("numero").innerHTML = `0${nr + 1}`;

;


}


function prev(){

  if (nr == 0) {
    nr = 2;

    document.querySelector("div.content.active").classList.remove("active");

    showContainer[nr].classList.add("active");
    document.querySelector(".ponto.active").classList.remove("active");
    showPonto[nr].classList.add("active");
  } else {
    document.querySelector("div.content.active").classList.remove("active");
    nr -= 1;
    showContainer[nr].classList.add("active");

    document.querySelector(".ponto.active").classList.remove("active");
    showPonto[nr].classList.add("active");
  }

  document.getElementById("numero").innerHTML = `0${nr + 1}`;

;

}


antes.addEventListener("click", prev)
depois.addEventListener("click", next)

setInterval(next, 4000)