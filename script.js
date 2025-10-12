 var btn = document.getElementById("showhide");
 var contador = 0
 
 btn.addEventListener("click", function showHide() {
  var projects = document.querySelectorAll("div.projects");
  var btn = document.getElementById("showhide");
 

  projects[1].classList.toggle("off");
   projects[2].classList.toggle("off");
 if(contador == 0){
  btn.innerHTML = "Ver menos"
  if(contador == 1){contador = 0}else{ contador ++}
 }else{
  btn.innerHTML = "Ver mais"
  contador = 0
 }

});
