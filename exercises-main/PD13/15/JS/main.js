let kaina = 1250;
let discount = 80;
let munz = window.prompt("Tu sutaupei tiek pinigu: (realusis skaicius)");


let wDisc = (kaina * discount / 100);

if(munz > wDisc){
    console.log("Pinigu uztenka.");
} else{
    console.log("Pinigu neuztenka.");
};

console.log("Telefono bendra kaina: " + wDisc);