let arr = [167.2, 134.3, 145.4, 156.5, 155.6, 176];

let sum = 0;
for (let number of arr) {
    sum += number;
}
let average = sum / arr.length;

console.log(`Eglutes aukscio vidurkis ${average.toFixed(1)} cm.`)

//arba
let averg = arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(`Eglutes aukscio vidurkis: ${averg.toFixed(1)} cm.`)