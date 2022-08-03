// hoisting
// x = 5;
// console.log(x);
// var x;
// console.log(x);

// block code
// global scope
// {
//     var x = 5;
//     console.log(x)
//     {
//         var x = 7;
//         console.log(x)
//     }
//     console.log(x);
// }
// console.log(x)
// block code scope
// {
//     let x = 5;
//     console.log(x)
//     {
//         let x = 7;
//         console.log(x)
//     }
//     console.log(x);
// }

// closure
// {
//     let x = 5;
//     console.log(x)
//     {
//         let x = 7;
//         console.log(x)
//         {
//             console.log(x)
//             {
//                 console.log(x)
//             }
//         }
//     }
//     console.log(x);
// }
// constance
const number = 5;
console.log(number);
// number = 7;
// console.log(number);