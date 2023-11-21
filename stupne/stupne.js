let input1 = document.querySelector("#input1")
let input2 = document.querySelector("#input2")
let nadpis = document.getElementById("nadpis")


 let tlacitko= document.querySelector("#tlacitko")



function prevod() {
    let textInputu1 = input1.value
    let nadpis = document.getElementById("nadpis")
     if (textInputu1 === "C") { 
    let vysledek = (5* (textInputu2 - 32)) / 9;
    nadpis.innerText = vysledek;
    } else if (textInputu1 === "F") {
        let vysledek = textInputu2  * (9 / 5) + 32;
        nadpis.innerText = vysledek
    }
       
    
}
