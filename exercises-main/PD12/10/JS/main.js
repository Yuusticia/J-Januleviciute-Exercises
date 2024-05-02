let priekisK = 5;
let Pcm = 0.50;
let atbulasK = 3;
let Acm = 0.45;
let k = 3;
let t = 5;

//koks m,cm, vidut. greitis v
let x = 0;
let calc = (x = (Pcm * priekisK) - (Acm * atbulasK)) * k;
let ats = Math.floor(calc);
let result = calc.toFixed(2);
let ats2 = result - Math.floor(result);

let v = calc*k/t;

console.log(`${ats} m, ${ats2.toFixed(2)}cm, greitis: ${v} m/s`);