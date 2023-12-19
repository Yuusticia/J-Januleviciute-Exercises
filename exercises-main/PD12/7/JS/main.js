let n = 4;
let arr = [22, 20, 25, 25];

let smallNum = Math.min(...arr);

let sum = 0;
for (let number of arr) {
    sum += number;
}
let average = sum / arr.length;
let finalnum = average - smallNum;


console.log(`Greiciuasio begiko laikas: ${smallNum} sek..
Jis buvo: ${finalnum} sek geresnis uz vidurki.`)