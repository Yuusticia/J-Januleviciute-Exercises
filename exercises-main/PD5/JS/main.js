'use strict'

let mynumber = "1 num";
let mybiginit = "2 bigint";
let mystring = "3 string";
let myboolean = "4 boolean";
let myundefined = undefined;
let mynull = null;
let myobject = "7 object";

console.log(mynumber);
console.log(mybiginit);
console.log(mystring);
console.log(myboolean);
console.log(myundefined);
console.log(mynull);
console.log(myobject);


let number = 12;
console.log('number type is -', typeof number);
let otherNumber = 45.89;
console.log('otherNumber type is -', typeof otherNumber);

let textOne = 'Beautiful JavaScript World';
console.log(textOne, 'type is -', typeof textOne);
let textTwo = "Beautiful JavaScript World";
console.log(textTwo, 'type is -', typeof textTwo);
let textThree = `Beautiful JavaScript World`;
console.log(textThree, 'type is -', typeof textThree);

let isTrue = (true == false);
console.log('isTrue type is -', typeof isTrue);
let isEqual = (2 >= 0);
console.log('isEqual type is -', typeof isEqual);

let petName = undefined;
console.log('petName type is -', typeof petName);
let petAge = null;
console.log('petAge type is -', typeof petAge);
let human = {
    humanName: undefined,
    humanAge: null
};
console.log('humanName type is -', typeof human.humanName);
console.log('humanAge type is -', typeof human.humanAge);
