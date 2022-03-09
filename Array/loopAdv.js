let numbers = [11, 40, 21, 23, 40, 4, 32]
// numbers.map(handleMap)
// function handleMap(number, index, data){
//     console.log(`${index}: ${number}: ${data}`)
// }

// numbers.reduce(function(prev,currValue, currIndex,data){
//     console.log(data)
//     return prev+=currValue
// })
// console.log(numbers.includes("A"))
// let keys = numbers.keys();
// let entries = numbers.entries();

// for(let key of keys){
//     console.log(key)
// }
// for(let entry of entries){
//     console.log(`${entry[0]}:${entry[1]}`)
// }
// console.log(Array.from("YJNONN"))
// let position = numbers.findIndex(function(number){
//     return number > 30;
// })
// console.log(position)

// let result = numbers.find(function(number){
//     return number > 80;
// })
// console.log(result)

// console.log(numbers.lastIndexOf(40))
// console.log(numbers.indexOf(40))
// let position = -1;
// for(let index in numbers){
//     if(numbers[index] == 41){
//         position = index;
//         break;
//     }
// }

// console.log(position)

// let result = numbers.some(function(number){
//     return number < 5
// })
// console.log(result);
// let result = numbers.every(function(number){
//     return number > 0;
// })
// console.log(result)

// let existLessThan5 = false;
// for(let number of numbers){
//     if(number < 5){
//         existLessThan5 = true;
//         break;
//     }
// }
// console.log(existLessThan5)
// let isGeaterThanZero = true;
// for(let number of numbers){
//     if(number <=0){
//         isGeaterThanZero = false;
//         break;
//     }
// }

// console.log(isGeaterThanZero)

// let result = numbers.reduce(function(total, number){
//     return total+=number;
// },10)
// console.log(result)
// let total = 0;
// for(let num of numbers){
//     total += num;
// }
// console.log(total)
// let result = numbers.filter(function(number){
//     return number >= 11 && number < 31;
// })
// console.log(result)
// let result = [];
// for(let num of numbers){
//     if(num >= 11)
//         result.push(num);
// }
// console.log(result)
// let htmls = numbers.map(function(number, index){
//     return `<h1>index: ${index}- value: ${number}</h1>`
// });
// console.log(htmls)
// let numbers2 = ["<h1>11</h1>"
//                 , "<h1>1</h1>"
//                 , "<h1>21</h1>"
//                 , "<h1>2</h1>"
//                 , "<h1>3</h1>"
//                 , "<h1>4</h1>"
//                 , "<h1>32</h1>"]
// numbers.length = 100;
// for..in
// for(let index in numbers){
//     console.log(`${index}: ${numbers[index]}`)
// }

//for..of
// for(let value of numbers){
//     console.log(value)
// }
// function callbackFn(value, index) {
//     console.log(`${index}: ${value}`);
// }
// numbers.forEach(function (number, index) {
//     console.log(`${index}: ${number}`);
// })

// map ~ ánh xạ
// fillter ~ lọc
// reduce  ~ nén lại, giảm lại
// every ~ tất cả
// some ~ một vài

// ĐỆ QUI
// 1. Trường hợp suy biến
// 2. Biểu thức truy hồi
// 3. Gọi lại chính nó
// n! = n * (n-1)!
// 6! = 6 x 120 = 720 Triết
// 5! = 5 x 24 = 120 Hằng
// 4! = 4 x 6 = 24 Ngân
// 3! = 3 x 2 = 6 Lý
// 2! = 2 x 1 = 2 Hân
// 1! = 1 Thi
// 1! = 1 | 0! = 1
// Top to Down - Down to Top

function deQui(n){
    if(n == 1)
        return 1;
    return n * deQui(n-1);
}
console.log(deQui(120))