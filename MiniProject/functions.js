// 1. Hàm được tạo ra để thực hiện 1 chức năng/ nhiệm vụ gì đó
// 2. Tái sủ dụng lại mã nguồn (re-use)

// Những loại hàm
// 1. Declaretion function
// 2. Expression fucntion
// 3. Anonymous function
// 4. Arrow function

// function <tenHam>([danh sách tham số]){
//     <thân hàm>
//     [return]
// }

// console.log(sum(5,7));
// function sum(n1, n2){
//     return n1 + n2;
// }
// console.log(sum(15,17));

// console.log(sum(5,7)); --> lỗi
const sum = function(n1, n2){
    return n1 + n2;
}
console.log(sum(15,17));
// <tenHam>: theo qui tắc đặt tên biến, bắt đầu bằng 1 động từ, có ý nghĩa (gợi nhớ)
// [danh sách tham số]: 
// Math.random()
// Math.floor(number)
// Console.log(...data)
// <thân hàm>: thực nghiệp vụ/ logic của hàm
// [return]

// let size = 10;
// let min = 10, max = 50;
// let numbers = [];
// for(let i=0; i< size; i++){
//     numbers.push(Math.floor(Math.random()*(max - min + 1) + min));
// }
// for(let i = 0; i < size; i++){
//     console.log(numbers[i]);
// }

// let numbers2 = [];
// for(let i=0; i< size; i++){
//     numbers2.push(Math.floor(Math.random()*(max - min + 1) + min));
// }
// for(let i = 0; i < size; i++){
//     console.lo(numbers2[i]);
// }g

// viết hàm tạora  1 mảng có 10 phần tử, và các giá trị được sinh ngẫu nhiên [20, 50]
function generateArray(size, min = 20, max = 50) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // console.log(arr);
    // document.write(arr);
    // document.querySelector("h1").innerHTML = arr.join();
    return arr;
}
// let a1 = generateArray(1, 10, 20)
// let a2 = generateArray(20, 100, 200)
// let a3 = generateArray(5, 30, 80)
// console.log(a1);
// document.write(a2);
// document.querySelector("h1").innerHTML = a3.join();

// tham trị và tham chiếu
// function swap(n1, n2){
//     let temp = n1;
//     n1 = n2;
//     n2 = temp;
//     console.log(`2. n1: ${n1}, n2: ${n2}`); //7-5
// }
// let n1 = 5;
// let n2 = 7;
// console.log(`1. n1: ${n1}, n2: ${n2}`); //5-7
// swap(n1, n2)
// console.log(`3. n1: ${n1}, n2: ${n2}`); //5-7 | 7-5