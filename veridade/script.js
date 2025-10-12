/*
function verificar(){
    // Idade
    var ano = document.getElementById('idade').value
   
    var Esteano = new Date().getFullYear()
    var anoRes = Esteano - ano
     if (ano == "" || ano > Esteano ) {
        alert('Verifique os dados')
    } else{
        
}
    }


// Sexo
function verificar() {
  // IDADE
  var ano = document.getElementById("idade").value;
  var Esteano = new Date().getFullYear();
  var anoRes = Esteano - ano;
   var cor = document.getElementById("cor")
  if (ano == "" || ano > Esteano) {
    alert("Verifique os dados");
  } else if (anoRes <= 12 ) {
    cor.style.backgroundColor = "lightgreen"
  } else if (anoRes > 12 & anoRes <= 25 ){
     cor.style.backgroundColor = "yellow"
  }  else if (anoRes > 25 ){
     cor.style.backgroundColor = "red"
      document.querySelector("div#cor").innerHTML = '<img src="img/Screenshot 2025-06-17 002629.png" alt="">'
  }  

  // SEXO
  var sexo = document.getElementsByName("sexo");

  if (sexo[0].checked) {
    document.querySelector("div#cor").innerHTML = "Homem";
  } else if (sexo[1].checked) {
    document.querySelector("div#cor").innerHTML = '<img src="img/Screenshot 2025-06-17 002629.png" alt="">';
  } else {
    alert("Verifique os dados");
  }
}
    */

function verificar() {
  var ano = document.getElementById("idade").value;
  var tst = Number( document.getElementById("idade").value)
  var Esteano = new Date().getFullYear();
  var idade = Esteano - ano;
  var cor = document.getElementById("cor");
  var sexo = document.getElementsByName("sexo");
  var texto = document.getElementById('pres') 

  document.getElementById('carregar').style.display = 'none'
   document.getElementById('tudo').style.display = 'flex'
  

  if ((ano > Esteano || ano == "") || (!sexo[0].checked && !sexo[1].checked) ){
    alert('[ERRO] Verifique os dados')
     document.getElementById('carregar').style.display = 'block'
   document.getElementById('tudo').style.display = 'none'

  } else if (idade <=12 & sexo[0].checked ){
    document.querySelector("div#cor").innerHTML = "Homem";
    cor.style.backgroundColor = "lightgreen"
    texto.innerHTML = 'Voce é um Homem de ' + idade + ' anos de idade'
  }  else if (idade <=12 & sexo[1].checked ){
    document.querySelector("div#cor").innerHTML = "Mulher";
    cor.style.backgroundColor = "lightgreen"
    texto.innerHTML = 'Voce é uma Mulher de ' + idade + ' anos de idade'
  } else if ((idade >12 & idade <=18) & sexo[0].checked ){
    document.querySelector("div#cor").innerHTML = "Homem";
    cor.style.backgroundColor = "yellow"
    texto.innerHTML = 'Voce e um Homem de ' + idade + ' anos de idade'
  }   else if ((idade >12 & idade <=18) & sexo[1].checked ){
    document.querySelector("div#cor").innerHTML = "Mulher";
    cor.style.backgroundColor = "yellow"
    texto.innerHTML = 'Voce e uma Mulher de ' + idade + ' anos de idade'
  }  else if (idade >18 & sexo[0].checked ){
    document.querySelector("div#cor").innerHTML = "Homem";
    cor.style.backgroundColor = "red"
    texto.innerHTML = 'Voce e um Homem de ' + idade + ' anos de idade'
  }   else if (idade >18 & sexo[1].checked ){
    document.querySelector("div#cor").innerHTML = "Mulher";
    cor.style.backgroundColor = "red"
    texto.innerHTML = 'Voce e uma Mulher de ' + idade + ' anos de idade'
  } 
}
