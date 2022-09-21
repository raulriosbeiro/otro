
let btnCar = document.getElementById("btnCar");
btnCar.disabled=true;
let compName, compNumber, compDateMonth, compDateYear, compCvc = false;

document.getElementById('cardName').addEventListener("keyup",function (){
    let cardName = document.getElementById('cardName');
    document.getElementById("cardFrontName").textContent =  cardName.value;
    if(cardName.value.length == 0 || cardName.value.match("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$")==null){
        btnCar.disabled=true;
        compName = false;  
        cardName.style.borderColor="red";   
    }
    else{
        compName = true;
        cardName.style.borderColor="var(--light_grayish_violet)";
        if(compName==true && compNumber == true)
        {
            btnCar.disabled=false;
        }
    }
});
document.getElementById('cardNumber').addEventListener("keyup",function (event){
    let cardNumber = document.getElementById('cardNumber'); 
    let noSpaceNum = cardNumber.value.replace(/\s+/g, '');
    document.getElementById("cardFrontNum").textContent =  cardNumber.value;
    if(event.key!=="Backspace"){
        if(cardNumber.value.length == 4 || cardNumber.value.length == 9 ||  cardNumber.value.length == 14 ){
            cardNumber.value = cardNumber.value + " " ;
        }
    }
    if(noSpaceNum.length != 16 || isNaN(noSpaceNum)){
        btnCar.disabled=true; 
        compNumber = false; 
        cardNumber.style.borderColor="red";   
    }
    else{
        compNumber = true;
        cardNumber.style.borderColor="var(--light_grayish_violet)";
        if(compName==true && compNumber == true && compDateMonth == true && compDateYear==true && compCvc == true)
        {
            btnCar.disabled=false;
        }
    }
    
});
document.getElementById('cardMonth').addEventListener("keyup",function (event){
    let cardMonth = document.getElementById("cardMonth");
    document.getElementById("cardFrontDate1").textContent =  cardMonth.value;
    if(isNaN(cardMonth.value) || cardMonth.value.length == 0){
        btnCar.disabled=true; 
        compDateMonth = false; 
        cardMonth.style.borderColor="red";   
    }
    else{
        compDateMonth = true; 
        cardMonth.style.borderColor="var(--light_grayish_violet)";
    }
    if(compName==true && compNumber == true && compDateMonth == true && compDateYear==true && compCvc == true)
        {
            btnCar.disabled=false;
        }
    
});
document.getElementById('cardYear').addEventListener("keyup",function (event){
    let cardYear = document.getElementById("cardYear");
    document.getElementById("cardFrontDate2").textContent=  "/ "  + cardYear.value;
    if(isNaN(cardYear.value) || cardYear.value.length == 0){
        btnCar.disabled=true; 
        compDateYear = false; 
        cardYear.style.borderColor="red";   
    }
    else{
        compDateYear = true; 
        cardYear.style.borderColor="var(--light_grayish_violet)";
    }
    if(compName==true && compNumber == true && compDateMonth == true && compDateYear==true && compCvc == true)
        {
            btnCar.disabled=false;
        }
    
});
document.getElementById('cardCvc').addEventListener("keyup",function (event){
    let cardCvc = document.getElementById("cardCvc");
    document.getElementById("cardBackCvc").textContent= cardCvc.value;
    if(isNaN(cardCvc.value)|| cardCvc.value.length < 3){
        btnCar.disabled=true; 
        compCvc = false; 
        cardCvc.style.borderColor="red";   
    }
    else{
        compCvc = true; 
        cardCvc.style.borderColor="var(--light_grayish_violet)";
    }
    if(compName == true && compNumber == true && compDateMonth == true && compDateYear == true && compCvc == true)
        {
            btnCar.disabled=false;
        }
    
});




