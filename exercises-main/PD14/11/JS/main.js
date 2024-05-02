let a = 42;
const numbers = [];
let numbersSum = 0;
for (let i = 1; i <= 42; i++) {
    if(numbers % i == 0){
        numbers.push(i);
        numbersSum += numbers[i];
    }
}
console.log(numbers)
console.log(numbersSum)

//for, while, do while