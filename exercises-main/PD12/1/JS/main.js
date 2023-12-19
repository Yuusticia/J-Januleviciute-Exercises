let paskaitos = [5, 6, 4, 5, 4];
let paskSum = 0;

for (let x = 0; x < paskaitos.length; x++) {
    paskSum += paskaitos[x];
}

let paskaita = 45;
let paskMin = paskSum * paskaita;

console.log(`Paskaitu kiekis per savaite - ${paskSum}. Tai sudaro ${paskMin} minuciu.`);