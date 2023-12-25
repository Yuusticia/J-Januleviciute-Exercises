//vokas
let a = 20;
let b = 100;
//atvirukas
let c = 60;
let d = 110;

let telpa = false;

for (let i = 0; i <= 1; i++) {
    for (let j = 0; j <= 1; j++) {
        let vidinisPlotis = a - i * 2;
        let vidinisIlgis = b - j * 2;

        if (vidinisPlotis >= c && vidinisIlgis >= d) {
            telpa = true;
            break;
        }
    }
    if (telpa) {
        break;
    }
}

if (telpa) {
    console.log('Atvirukas tilps į voką.');
} else {
    console.log('Atvirukas netilps į voką.');
}