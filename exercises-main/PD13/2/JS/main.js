x = 5;
y = 10;
z = -12;
let zenklas;

function add(x, y, z){
    return x * y * z;
}
let result = add(5,10,-12);
console.log(`Rezulatas ${result}`);

if (x === 0 || y === 0 || z === 0) {
    zenklas = "Nulis (0)";
  } else {
    let negatives = 0;
  
    if (x < 0) negatives++;
    if (y < 0) negatives++;
    if (z < 0) negatives++;
  
    if (negatives % 2 === 0) {
      zenklas = "+";
    } else {
      zenklas = "-";
    }
  }

console.log(`Zenklas yra ${zenklas}`);