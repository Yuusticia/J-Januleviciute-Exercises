let numA = window.prompt("write a number.");
let numB = window.prompt("write a 2nd number.");

if ((numA % numB) == 0) {
    // a is divisible by b
    let action = numA/numB;
    console.log(action);
}
else {
    //a is not divisible by b
    console.log("number is not divisible.");
}
