let Silgis = 4.00;
let Saukstis = 3.00;

let Pilgis = 0.20;
let Paukstis = 0.10;

let Pkaina = 0.50;

let ilg = Silgis / Pilgis;
let auks = Saukstis / Paukstis;
let bendras = ilg * auks;

let kaina = bendras * Pkaina;

    console.log(`Plytu kiekis ${bendras}.
    Plytos kainuos ${kaina} Eur.`)