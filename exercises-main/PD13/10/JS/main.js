let a = window.prompt("write a number.");
let b = window.prompt("write a 2nd number.");
let c = window.prompt("write a 3rd number.");

if(a>b && a>c){
    console.log(`Number ${a} is the biggest.`);
}
else if(b>a && b>c){
    console.log(`Number ${b} is the biggest.`);
}
else if(c>a && c>b){
    console.log(`Number ${c} is the biggest.`);
};