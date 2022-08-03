function createArray(size, min = 0, max = 10) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arr;
}

function checkPrimeNumberInArray(arr) {
    for (let index in arr) {
        let check = true;
        for (let k = 2; k < arr[index]; k++) {
            if (arr[index] % k == 0) {
                check = false;
                break;
            }
        }
        if (check == true) {
            return true;
        }
    }
    return false;
}

function calculateSumAll(arr) {
    let sum = 0;
    for (let value of arr) {
        sum+=value;
    }
    return sum;
}

function countEvenNumber(arr) {
    let count = 0;
    for (let number of arr) {
        if (number%2 == 0) {
            count++;
        }
    }
    return count;
}

// function process(){
//     let array = createArray(10, 10, 90);
//     let result = checkPrimeNumberInArray(array);
//     console.log(`${result ? "Có" : "không có"} số nguyên tố trong mảng`);
//     console.log(`Tổng giá trị trong mảng là: ${calculateSumAll(array)}`)
//     console.log(`Trong mảng có ${countEvenNumber(array)} số chẵn`)
// }

// process();

(function (){
    let array = createArray(10, 10, 90);
    let result = checkPrimeNumberInArray(array);
    console.log(`${result ? "Có" : "không có"} số nguyên tố trong mảng`);
    console.log(`Tổng giá trị trong mảng là: ${calculateSumAll(array)}`)
    console.log(`Trong mảng có ${countEvenNumber(array)} số chẵn`)
})()

// function sum(a, b){
//     console.log(a + b)
// }
// sum(5,6)
// (function sum(a, b){
//     console.log(a + b)
// })(5,6)
// Bước 1: tạo hàm
// Bước 2: gọi hàm/ thực thi hàm

// IIFE => tạo hàm, xong thực thi luôn

