let autobusuKiekis = 2;
let a1 = 110; // min
let a2 = 120; // min

let k1 = 17;
let k2 = 25;

//padaryt funkc
if(k1 < 10){
    console.log("This bus is ...");
} else if(k2 < 10){
    console.log("This bus is ...");
} else {
    console.log("0 bus < 10 people.");
}

console.log('Bendrai pervežtų keleivių skaičius = ' 
+ (k1+k2)+
'. Vidutinis sugaištas važiavimo laikas (min.): ' 
+ ((a1+a2)/2) + 
'. Autobusų skaičius (keleiviai < 10): ');


console.log(`Bendrai perveztu keleiviu skaicius = ${'s'}. 
Vidutinis sugaistas vaziavimo laikas (min): ${`115`}.
Autobusų kaičius (keleiviai < 10): ${`0`}`);