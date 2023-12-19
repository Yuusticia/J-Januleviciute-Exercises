let funnyNumber = 12345; // Convert to String
let txtcon = funnyNumber.toString(); //arba console.log (typeof String(funnyNumber));
console.log (txtcon, typeof txtcon);

let funnyString = '12345'; // Convert to Number
let numcon = +funnyString;
console.log (numcon, typeof numcon);
//console.log(parseInt(funnyString), typeof funnyString)
//console.log (funnyString, typeof funnyString);


let funnyTrue = '1'; // Convert to Boolean
let bootcon = (funnyTrue == 'true');
console.log (bootcon, typeof boocon);

let funnyFalse = '0'; // Convert to Boolean
let boofcon = (funnyFalse == 'true');
console.log (boofcon, typeof boofcon);


let isTrue1 = false; // Convert to String
let bootxt = isTrue1.toString();
console.log (bootxt, typeof bootxt);

let isFalse1 = true; // Convert to Number
let boonum = +isFalse1;
console.log (boonum, typeof boonum);

//You have to be carefull when using Boolean.valueOf(string) or Boolean.parseBoolean(string). 
//The reason for this is that the methods will always return false if the String is not equal to "true" 
//(the case is ignored).

//For example:
//Boolean.valueOf("YES") -> false

//Because of that behaviour I would recommend to add some mechanism to ensure that the string which should 
//be translated to a Boolean follows a specified format.

//For instance:
//if (string.equalsIgnoreCase("true") || string.equalsIgnoreCase("false")) {
    //Boolean.valueOf(string)
    // do something   
//} else {
    // throw some exception
//}

let funnyText = 'JavaScript is dynamic programming language.'; // Convert to Number
let txtnum = +funnyText;
console.log (txtnum, typeof txtnum);

let funnyNull = null; // Convert to String
funnyNull = String(funnyNull);
let nulltxt = funnyNull.toString();
console.log (nulltxt, typeof nulltxt);

let funnyUndefined = undefined; // Convert to String
funnyUndefined = String(funnyUndefined);
let undeftxt = funnyUndefined.toString();
console.log (undeftxt, typeof undeftxt);


let isTrue2 = true; // Convert to String
let bootxt2 = isTrue2.toString();
console.log (bootxt2, typeof bootxt);

let isFalse2 = false; // Convert to String
let boofcon2 = isFalse2.toString();
console.log (boofcon2, typeof boofcon2);


let booleanString = 'true'; // Convert to Number
let trutostring = +booleanString;
console.log (trutostring, typeof trutostring);

let otherBooleanString = 'false'; // Convert to Boolean
let otherboocon = (otherBooleanString == 'true');
console.log (otherboocon, typeof otherboocon);