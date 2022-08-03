// sao chép array
// sao chép object

// pass by value
// pass by reference
// let numbers_1 = [1, 3, 4, 5, 6];
// let numbers_2 = numbers_1;//[...numbers_1];
// console.log(numbers_1); //1, 3, 4, 5, 6
// numbers_2[0] = 10;
// console.log(numbers_2); //10, 3, 4, 5, 6
// console.log(numbers_1);


let student_1 = {
    name: "Khoa",
    age: 18,
    gender: true
}

// let student_2 = student_1;
let student_2 = {
    ...student_1,
    email: "ly.ho@codegym.vn"
};
student_2.name = "Lý";
console.log(student_1);
console.log(student_2);