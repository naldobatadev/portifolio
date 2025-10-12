function verificar(){
  document.getElementById("carregar").innerHTML = ""
  var nr = Number(document.getElementById('nr').value)
 
  var ni = 1
 while(ni <= 10){
    nres = nr * ni 
    document.getElementById("carregar").innerHTML += "<p>" + nr + " x " + ni + " = "+ nres 
    ni ++

    
  }

}
/*
 
 for(ni = 1; ni < 11; ni ++){
   nres = nr * ni 
   document.getElementById("carregar").innerHTML += '<p>'+nres 
    
  }


*/
