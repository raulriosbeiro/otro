

const btn__hamburguer = document.getElementById("hambuerguer__link");
var estado = false;

function toogle_menu(){
    
    if(estado==false){
        document.getElementById("id__triangle").style.display = 'flex';
        document.getElementsByClassName("nav__mobile")[0].style.display ='flex';
        estado=true;
    }
    else{
        document.getElementById("id__triangle").style.transitionDuration ='1s';
        document.getElementById("id__triangle").style.display = 'none';
        document.getElementsByClassName("nav__mobile")[0].style.transition ='1s';
        document.getElementsByClassName("nav__mobile")[0].style.display ='none';
        
        estado=false;
    }
    
}


btn__hamburguer.addEventListener("click", toogle_menu);







