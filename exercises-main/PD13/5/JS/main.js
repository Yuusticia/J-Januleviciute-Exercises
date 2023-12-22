//kvadrtas
let ka = window.prompt("irašyk kvadrato kraštinę a.");
if (ka > 0){
    let kvadrS = ka*ka;
    console.log(`Kvadrato plotas S = ${kvadrS}.`);
}
else {
    console.log("Nieko nebuvo įrašyta.");
};

//staciakampis
let sa = window.prompt("irašyk stačiakampio kraštinę a.");
let sb = window.prompt("irašyk stačiakampio kraštinę b.");
if (sa, sb > 0){
    let stacS =  sa*sb;
    console.log(`Stačiakampio plotas S = ${stacS}.`);
}
else {
    console.log("Nieko nebuvo įrašyta.");
};

//apskritimas
let r = window.prompt("irašyk apskritimo spindulį r.");
if (r > 0){
    let apskS = Math.PI*(r*r);
    console.log(`Apskritimo plotas S = ${apskS.toFixed(2)}.`);
}
else {
    console.log("Nieko nebuvo įrašyta.");
};