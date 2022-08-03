// scope
// + Global
// + Local
// + Block code

// biến: var
// hàm: declaretion function
// var i;
// "use strict";
// for(i = 0; i< 10; i++){
//     console.log(i);
// }

// let j;
// console.log('i outside for', i);

// Declaretion function
sum(5,7);
function sum(a, b){
    // "use strict";
    n = 5;
    console.log(a + b);
}
// Expression function
const subtract = function(a, b){
    console.log(a - b);
}
subtract(7,5);
// Anonymous function /callback function
let numbers = [1,3,4,5];

let result = numbers.reduce(function (preValue, currValue){
    return preValue + currValue;
})