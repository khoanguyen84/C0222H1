// Lưu trữ thông tin của 1 học viên. Lưu như thế nào? kiểu dữ liệu nào được dùng để lưu trữ?
// Kiểu DL nguyên thủy, number, string, bolean, array

// Họ và tên
// Tuổi
// Giới tính
// Sở thích
// Email
// let fullname = "Khoa";
// let age = 18;
// let gender = true;
// let hobbies = ["football", "swimming", "walking"]
// let email = "khoa.nguyen@codegym.vn"

// kiểu object / định  nghĩa 1 kiểu dữ liệu mới/ kiểu dữ liệu do người người dùng định nghĩa

// Tạo đối tượng
// let object = {
// property1: value1,
// property2: value2,
// property3: value3,
// }

let khoa = {
    fullname: "Khoa",
    age: 18,
    gender: true,
    hobbies: ["football", "swimming", "walking"],
    email: "khoa.nguyen@codegym.vn"
}

// let han = {
//     fullname: "Hân",
//     age: 18,
//     gender : true,
//     hobbies : ["football", "swimming", "walking"],
//     email: "han@codegym.vn"
// }
let han = { ...khoa };
han.fullname = "Hân"
han.email = "han@gmail.com"
// console.log(han);
// console.log(khoa);
// truy cập thuộc tính, giá trị trong đối tượng
// console.log(khoa["age"])
// console.log(khoa.age)
// console.log(khoa.hobbies[2])

// Tham trị và tham chiếu
// Tham chiếu: array, object, function

// let x = 5;
// let y = x;
// y = 7;
// console.log(x)
// console.log(y)

// let a1 = [1,2,3,4]
// let a2 = [...a1];
// a2[1] = 20;
// console.log(a2)
// console.log(a1);
// ...spread
// ...rest
// function sum(){
//     let total = 0;
//     for(let i = 0; i<arguments.length;i++){
//         total +=arguments[i]
//     }
//     return total
// }

// function sum(mesage, fn, ...paras) {
//     console.log(mesage)
//     console.log(fn)
//     let total = 0;
//     for (let i = 0; i < paras.length; i++) {
//         total += paras[i]
//     }
//     return total
// }

function sum(...paras) {
    let total = 0;
    for (let i = 0; i < paras.length; i++) {
        total += paras[i]
    }
    return total
}

let numbers = [1,2,3,4,5,6,7,7,8]

console.log(sum(...numbers))
// console.log(sum(1,2,3,4,5,6,7,7,8))