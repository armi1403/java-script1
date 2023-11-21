

prictiDva(14)

function prictiDva(cislo) {
    let vysledek = cislo + 2
    console.log(vysledek)
}




function doporucFilm(zanr) {
    if (zanr === "pohadka") {
        console.log("Ať žijí duchové")
    }
    
    else if (zanr === "komedie" ) {
        console.log("The Nice Guys")
    }
    else if (zanr === "akční film") {
        console.log("Die hard")
    }
    else (console.log("Zkuste zadat jiný žánr"))
        
    
}

doporucFilm("pohadka")



function vyhazovac(rocnik, aktualniRok) {
    let vysl = aktualniRok - rocnik
    if (vysl >= 18){
        console.log("můžeš vstoupit")
    }
    else (console.log("vstup zakázán"))
}

vyhazovac(2005, 2023)