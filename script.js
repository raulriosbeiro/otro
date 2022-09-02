

const btn__hamburguer = document.getElementById("hambuerguer__link");
var estado = false;

function toogle_menu(){

    if(estado==false){
        document.getElementById("id__triangle").style.opacity = '1';
        document.getElementById("nav_mobile").style.opacity ='1';
        document.getElementById("nav_mobile").style.height ='150px';

        estado=true;
    }
    else{
        document.getElementById("id__triangle").style.opacity = '0';
        document.getElementById("nav_mobile").style.opacity ='0';
        document.getElementById("nav_mobile").style.height ='0%';

        estado=false;
    }

}


btn__hamburguer.addEventListener("click", toogle_menu);







