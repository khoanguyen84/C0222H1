// ECMS Script
// function Student(){
//     this.info = function(){

//     }
// }

// class Student{
//     info(){
//     }
// }

// const subtract = function(a, b){
//     console.log(a - b);
// }
// const subtract = (a, b) => console.log(a - b);
// subtract(7,5)

// const hello = function(name){
//     console.log(`hello, ${name}`);
// }
// const hello = (name) => console.log(`hello, ${name}`);
// hello("Lý");

// const slogen = function(){
//     console.log("Hello world");
// }
// const slogen = () => console.log("Hello world");

// slogen();

let numbers = [1,3,4,5];

// let result = numbers.reduce(function (preValue, currValue){
//     return preValue + currValue;
// })
let result = numbers.reduce((preValue, currValue) => preValue + currValue);
console.log(result)