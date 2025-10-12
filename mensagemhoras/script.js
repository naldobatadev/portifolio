var tempo = new Date().getHours()
var cor = document.body.style
var img = document.getElementById('cor')

if (tempo >= 0 & tempo <= 12){
  cor.backgroundColor = "aqua"
   img.innerHTML = '<img src="img/Screenshot 2025-07-27 221752.png" alt="">'
   document.getElementById('h2').innerHTML = 'Bom dia, sao '+tempo + " horas!"
} else if (tempo > 12 & tempo <=18){
  cor.backgroundColor = "yellow"
  img.innerHTML = '<img src="img/Screenshot 2025-03-25 234108.png" alt="">'
   document.getElementById('h2').innerHTML = 'Boa tarde, sao '+tempo + " horas!"
} else {
 cor.backgroundColor = "black"
 cor.color= "white"
 document.getElementById('h2').style.color = "black"
 img.innerHTML = '<img src="img/Screenshot 2025-07-15 195015.png" alt="">'
  document.getElementById('h2').innerHTML = 'Boa noite, sao '+ tempo + " horas!"
}

