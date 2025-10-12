var obj = []

function add() {

  document.querySelector("p#carregar").innerHTML = ""
  let ver = document.querySelector("input#nr").value;
  if ((ver.length = 0 || ver > 100 || ver < 1 || ver == obj )) {
    alert("Valor invalido ou ja encontrado na lista!");
  } else {
    var numD = Number(document.querySelector("input#nr").value);
    document.querySelector(
      "div#select"
    ).innerHTML += `<option> O numero ${numD} foi adicionado </option>`;
    document.querySelector("input#nr").value = "";
     obj.push(numD)
     
  }
 document.querySelector("input#nr").focus()
 

}

function fim(){
  if(obj.length==0  ){
    document.querySelector("p#carregar").innerHTML = ""
    alert('Adicione valores antes de finlizar')
    
  }
  obj.sort()
  var res = 0
  for (var n = 0; n < obj.length; n ++ ){
      res += Number(obj[n])
  }  

  var c = document.querySelector("p#carregar")

  c.innerHTML += `<p> Ao todo, foram analisados <strong>${obj.length}</strong> numeros!`
  c.innerHTML += `<p> O maior valor encontrado foi <strong>${obj[obj.length - 1 ]}.</strong>`
  c.innerHTML += `<p> O menor valor encontrado foi <strong>${obj[0]}.</strong>`
  
  c.innerHTML += `<p> A soma dos valores e igual a <strong>${res}.</strong>`
 
  c.innerHTML += `<p> A media dos valores e igual a <strong>${res / obj.length}.</strong>`



 

}

