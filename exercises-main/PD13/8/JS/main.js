let a = window.prompt("write a number.");
let b = window.prompt("write a 2nd number.");
let c = window.prompt("write a 3rd number.");

if(a<b && b<c && c>a){
    console.log(`${a} < ${b} < ${c}`);
}
else if(b>a && a>c && c<b){
    console.log(`${b} > ${a} > ${c}`);
}
else{
    console.log("error.");
}