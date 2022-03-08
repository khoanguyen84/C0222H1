// let x1 = 5;
// let x2 = 5;
// let x3 = 5;
// let x4 = 5;
// let x5;
// let arr = [];
// let arr2 = new Array();
// let arr3 = [10, 2, 2, 2, 20, 30]; // tạo ra 1 mảng có tên arr3 và có 3 phần tử và giá trị mỗi pt lần lượt là 10, 20 và 30
// let arr4 = new Array(5); // tạo ra 1 mảng có tên arr4 và có 5 phần tử và giá trị mỗi phần tử đang làm underfine
// let arr5 = new Array(5, 6)
// Các thao tác với mảng
// 1. duyệt mảng
// console.log(arr3[0])
// console.log(arr3[1])
// console.log(arr3[2])
// index: 0 -> length - 1 ( 0 -> n -1)
// console.log(arr3.length)
// arr3.length = 10;
// for (let i = 0; i < arr3.length; i++) {
//     console.log(`${i}: ${arr3[i]}`)
// }
// 2. truy cập giá trị của mảng
// console.log(arr3[3])
// 3. Thay đổi giá trị của phần tử mảng
// arr3[1] = 200;
// 4. Thay đổi độ dài ( số phần tử) trong mảng
// - thêm cuối (push)
// - xóa cuối (pop)
// - Thêm đầu (unshift)
// - Xóa ở đầu (shift)
// - Thêm ở giữa (splice) bắt đầu từ vị trí start, 0 cho giá trị deleteCount và danh sách các giá trị muốn thêm vào
// - Xóa ở giữa (splice) bắt đầu từ vị trí start và xóa đi deleteCount phần tử
// let result = arr3.push(40,50,60,70,80,90);
// console.log(arr3);
// let removeValue = arr3.pop()
// console.log(arr3);
// console.log("removeValue: ", removeValue)

// let result = arr3.unshift(40,50,60,70)
// console.log(arr3)
// let removeValue = arr3.shift()
// console.log(arr3)
// console.log("Remove value:", removeValue)

// console.log(arr3)
// arr3.splice(arr3.length - 1, 1)
// console.log(arr3)
// console.log(arr3)
// arr3.splice(1,0,1,1,1,1,1);
// arr3.splice(0,0,1)
// arr3.splice(arr3.length, 0, 1)
// console.log(arr3)
// console.log(arr3);
// arr3.splice(1,3)
// console.log(arr3);
// arr3.splice(1, 0,50,50,50)
// arr3.splice(1, 3, 50, 50) //xóa và thêm
// console.log(arr3);
// console.log(arr3);
// let addValues = arr3.splice(1,0,3,3)
// console.log(arr3);
// console.log("addValues: ", addValues);

// tạo 1 mảng có 10 phần tử và giá trị của mỗi phần tử, được sinh ngẫu nhiên trong [10,50]
// hiển thị mảng này ra màn hình
//  Để sinh số ngẫu nhiên từ [min, max]
// Math.floor(Math.random()*(max - min + 1) + min)
// let array = []
// for (let i = 0; i < 10; i++) {
//     array[i] = Math.floor(Math.random() * (50 - 10 + 1) + 10);
// }
// console.log(array)
//Math.random(): sinh cho ta 1 số ngẫu nhiên 
// [10,50]
// console.log(Math.random()*41 + 10) 
// 0.001 -> x 40 -> 0.04 + 10 = 10.004
// 0.999 -> x 40 -> 39.96 + 10 = 49.96
// [min, max] -> [0, max - min] + min
// [30, 90] -> [0, 60] + 30
// toString()
// console.log(arr3.toString())
// console.log(arr3.join(";"))
// console.log(arr3)
// delete(arr3[2])
// console.log(arr3)
let arr3 = [10, 2, 2, 2, 20, 30];
let arr4 = [3,4,5];
let newArr =  arr3.concat(arr4, 40, 70, 80, [4,4,4]);
console.log(newArr)

let sliceArr = newArr.slice(4,9);
console.log(sliceArr)
