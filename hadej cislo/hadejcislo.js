let cislo = floor;
let nadpis=document.getElementById("nadpis")
let tlacitko=document.querySelector("#tlacitko")
let input= document.querySelector("#input")


tlacitko.addEventListener("click", zmenNadpis)


function zmenNadpis(){
    nadpis.innerText = input.value
    
}
if(cislo < 10){
    nadpis.innerText = "Větší zkus"
}
else if(cislo > 10){
    nadpis.innerText = "Menší zkus"
}
else{
    nadpis.innerText = "Výhra"
}
    


