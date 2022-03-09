let names = ["Khoa", "Hân", "Lý", "Thi"];
// console.log(names.sort());
let numbers = [11, 1, 21, 2, 3, 4, 32]
let numbers2 = [11, 1, 21, 2, 3, 4, 32]
console.log(Math.max.apply(null, numbers))

//Declaration function
// Ascending (Tăng dần)
function ascending(n1, n2){
    return n1 - n2;
} 
// descending (giảm dần)
function descending(n1, n2){
    return n2 - n1;
}

// Anonymous function
numbers.sort(ascending)
numbers2.sort(ascending)
// console.log(numbers.reverse())
console.log(numbers2)
console.log(`Min: ${numbers2[0]}, Max: ${numbers2[numbers2.length - 1]}`)

// so sanh 2 số:
// 3 trường hợp: n1 > n2; n1 == n2; n1 < n2
//-------------: n1 - n2 > 0; n1 - n2 == 0; n1 - n2 < 0

// callback
// 1. Nó là 1 function
// 2. Phải được truyền như 1 tham số (parameter)
// 3. Phải được gọi (Phải được thực thi)

// function callback(a, b){
//     return a + b;
// }

// function process(paras){
//     let total = paras(5,6)
//     console.log(total)
// }

// process(callback);
