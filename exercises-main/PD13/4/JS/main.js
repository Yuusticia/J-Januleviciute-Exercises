let a = 17;
let b = 6;
let c = 13;

let D = (b*b)-(4*a*c);

if(D > 0){
    r1 = (-b + Math.sqrt(D))/(2*a);
    r2 = (-b - Math.sqrt(D))/(2*a);
    conosle.log(`Sprendinys: ${r1}, ${r2}.`);
}
else if(D < 0){
    console.log(`Sprendinys: diskriminantas yra negatyvus - sprendiniu nera.`);
}
else if(D == 0){
    r1 = r2 = -b / (2 * a);
    console.log(`Sprendinys: ${r1}, ${r2}.`);
};