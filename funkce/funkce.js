function ukazka(pozdrav) {
    console.log(pozdrav)
    console.log("Nazdar")
}

ukazka("dobrý den")
ukazka("ahoj")

function scitani(cisloA, cisloB) {
    let vysledek = cisloA + cisloB
    console.log(vysledek)
}

//proměnná funguje jen ve funkci

scitani(3, 8)

function prevod(km) {
    let mile = km * 0.613
    return mile
    
}

prevod(10) //můžu s tím pracovat dál v kódu

console.log(prevod(50))

let textHTML = document.querySelector("#text")
textHTML.innerText = prevod(50)      //vypíše do html jako nadpis




