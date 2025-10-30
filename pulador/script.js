
function verificar(){
var ni = Number(document.getElementById('ni').value)
var nf = Number(document.getElementById('nf').value)
var np = Number(document.getElementById('np').value)

document.getElementById('carregar').innerHTML = ""

if( ni, nf, np == "" || np == 0 || ni > nf){
  alert('Verifique os dados')
} else{}

 
  while (ni <= nf){
  document.getElementById('carregar').innerHTML +=`${ni}, ` 
  ni = ni + np
} 
   document.getElementById('carregar').innerHTML +=`FIM.` 
}

/*for(var a = n1; n1 < n2; n1 + n3){
 document.getElementById('carregar').innerHTML +=`OLa ${n1}`  

}

function ver(){
  var inicio = Number(document.getElementById('ni').value)
  var fim = Number(document.getElementById('nf').value)
  var pular = Number(document.getElementById('np').value)
  

  while(inicio < fim){
    document.getElementById('texto').innerHTML += inicio 
     inicio = inicio + pular
   
    
  }
}*/