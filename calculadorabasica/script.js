let pri = [];
let sec = 0;
let sin = "";

function um() {
  pri.push(1);
  document.querySelector("p#texto").innerHTML += pri[Number(pri.length) - 1];
 // document.getElementById('um').style.animation = "btn 2s ease-out"

}
function dois() {
  pri.push(2);
  document.querySelector("p#texto").innerHTML += pri[Number(pri.length) - 1];
}
function tres() {
  pri.push(3);
  document.querySelector("p#texto").innerHTML += pri[Number(pri.length) - 1];
}
function quatro() {
  pri.push(4);
  document.querySelector("p#texto").innerHTML += pri[Number(pri.length) - 1];
}
function cinco() {
  pri.push(5);
  document.querySelector("p#texto").innerHTML += pri[Number(pri.length) - 1];
}
function seis() {
  pri.push(6);
  document.querySelector("p#texto").innerHTML += pri[Number(pri.length) - 1];
}
function sete() {
  pri.push(7);
  document.querySelector("p#texto").innerHTML += pri[Number(pri.length) - 1];
}
function oito() {
  pri.push(8);
  document.querySelector("p#texto").innerHTML += pri[Number(pri.length) - 1];
}
function nove() {
  pri.push(9);
  document.querySelector("p#texto").innerHTML += pri[Number(pri.length) - 1];
}
function zero() {
  pri.push(0);
  document.querySelector("p#texto").innerHTML += pri[Number(pri.length) - 1];
}
/////////////////////

function vezes() {
  sin = "x";
  document.querySelector("p#texto").innerHTML += " x ";
}
function mais() {
  sin = "+";
  document.querySelector("p#texto").innerHTML += " + ";
}
function menos() {
  sin = "-";
  document.querySelector("p#texto").innerHTML += " - ";
}
function dividir() {
  sin = "/";
  document.querySelector("p#texto").innerHTML += " / ";
}

function resultado() {
  var a = Number(pri[0]) + Number(pri[1]);
  var b = Number(pri[0]) * Number(pri[1]);
  var c = pri[0] - pri[1];
  var d = pri[0] / pri[1];

  if (sin == "x") {
    document.querySelector("p#texto").innerHTML += "  =  " + b;
  } else if (sin == "+") {
    document.querySelector("p#texto").innerHTML += "  =  " + a;
  } else if (sin == "-") {
    document.querySelector("p#texto").innerHTML += "  =  " + c;
  } else if (sin == "/") {
    if (pri[0] == 0 && pri[1] == 0) {
      document.querySelector("p#texto").innerHTML += " = Imp. dividir";
    } else {
      document.querySelector("p#texto").innerHTML += "  =  " + d;
    }
  }

  pri = [];
}

function limpar() {
  document.querySelector("p#texto").innerHTML = "";
}

///////////////////
