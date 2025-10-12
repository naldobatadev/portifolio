document.getElementById("btn").addEventListener("click", usuario);
document.getElementById("btn").addEventListener("click", idade);
document.getElementById("btn").addEventListener("click", senhaV);


function usuario(){
    var nome = document.getElementById("nome").value.length;
    if (nome <= 3){
    document.getElementById("p").innerHTML = "O nome do usuario tem que ter mais de 3 caracteres"
} else if (nome >= 8){
    document.getElementById("p").innerHTML = "O nome do usuario tem que ter menos de 7 caracteres"
} else{
   document.getElementById("p").innerHTML = ""
}
}

//

let ano = new Date().getFullYear();
for (let i = ano; i > 1899; i--){
    document.getElementById("ano").innerHTML += "<option class='data' value='" +i+ "'>"+i+"</option>"
}

function idade(){
    var idade =  document.getElementById("ano").value;
    var Tidade = 2025 - idade;
    if (Tidade < 18){
         document.getElementById("q").innerHTML = "Precisa ter pelo menos 18 anos"
    } else{
        document.getElementById("q").innerHTML = ""
    }
}

//

function senhaV(){
    var senha = document.getElementById("senha").value.length;
    if (senha <= 3){
    document.getElementById("r").innerHTML = "A senha tem que ter mais de 3 caracteres"
} else if (senha >= 8){
    document.getElementById("r").innerHTML = "A senha tem que ter menos de 7 caracteres"
} else{
   document.getElementById("r").innerHTML = ""
}
}

var btnMenu = document.getElementById('Btnmenu')
var menu = document.getElementById('menu')

btnMenu.addEventListener("click", function() {
    menu.classList.toggle("show")
})






