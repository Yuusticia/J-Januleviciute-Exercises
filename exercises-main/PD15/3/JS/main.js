//edit
//isvesti last array element

const Array = [ 2, 5, 6, 8, 12, 22 ];
const ArrayCopy = [];

for(let i = 0; i < Array.length; i++){
    Array[i] = ArrayCopy[i];
};

console.log(Array[ArrayCopy.length - 1]);

