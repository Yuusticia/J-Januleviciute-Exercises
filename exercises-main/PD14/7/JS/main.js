let n = 1997;
let m = 2018;

function arKeliamieji(yr) {
    return (yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0;
}

for (let yr = n; yr <= m; yr++) {
    if (arKeliamieji(yr)) {
        console.log(yr);
    }
}