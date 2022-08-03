// hoisting
// for(let i = 1; i<= 10; i++){
//     console.log(i)
// }
// console.log("outsite for: ", i);
// var i;
// for (i = 1; i <= 10; i++) {
//     console.log(i)
// }
// console.log("outsite for: ", i);
// let i = 1;
// for (; i <= 10; ) {
//     console.log(i);
//     i++;
// }
// console.log("outsite for: ", i);

// for (let i = 1; i <= 10; i++) {
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

// Đột phức tạp của thuật toán

// for (let i = 5; i <= 1000; i+=5) {
//     console.log(i);
// }

// let count = 0;
// for (let i = 5; i <= 100; i+=5) {
//     count++;
//     console.log(i);
//     if(count == 5)
//         break;
// }

// for(let i=5, count=1; i <= 100 && count <= 5; i+=5, count++){
//     console.log(i);
// }
// let i = 0, count = 1;
// for (; ;) {
//     i += 5;
//     count++;
//     console.log(i);
//     if (i > 100 || count > 5)
//         break;
// }

// break, countinous

// for (let i = 1; i <= 10; i++) {
//     if(i%2 != 0){
//         continue;
//     }
//     console.log(i);
// }

// Nested loop
// for(let i=0; i< 5; i++){
//     for(let j=0; j< 3; j++){
//         for(let k=0; k < 4; k++){
//             console.log(`{i:${i},j:${j},k:${k}}`);
//         }
//     }
// }
// console.timeEnd()
