let kurasN = 11;
let lygKuras = kurasN;
let nelygKuras = kurasN * 2;


function kelionesTrukme(t, l) {
    let dienos = 0;
    let turimiDegalai = t;

    for (let diena = 1; turimiDegalai >= 0; diena++) {
        if (diena % 2 === 1) {
            // Nelyginė diena
            turimiDegalai -= 2 * l;
        } else {
            // Lyginė diena
            turimiDegalai -= l;
        }

        if (turimiDegalai >= 0) {
            dienos++;
        }
    }

    return dienos;
}

// Pavyzdys su 100 litrų baku ir 10 litrų suvartojimu
const talpa = 121;
const suvartojimas = 11;
const kelionesTrukmeDienomis = kelionesTrukme(talpa, suvartojimas);

console.log(`Keliauti bus galima ${kelionesTrukmeDienomis} dienas.`);