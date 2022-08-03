// Object Contructor

function Student(fullname, age, gender, hobbies, email) {
    // Properties
    this.fullname = fullname;
    this.age = age;
    this.gender = gender;
    this.hobbies = hobbies;
    this.email = email;
    // methods
    this.greeting = function () {
        return `Hello, my name is ${this.gender ? "Mr" : "Ms"}.${this.fullname}, Iam ${this.age} years old`
    }
    this.getHobbies = function () {
        return `My hobies are: ${this.hobbies.join()}`
    }
    this.setHobbies = function (hobby) {
        this.hobbies.push(hobby);
    }
}
// access modifier
// context / this
// let triet = {
//     fullname: "triet",
//     age: 18,
//     gender: true,
//     hobbies: ["Đá banh", "Cầu lông"],
//     email: "triet@gmail.com"
// }

// instance/object
let triet = new Student("triet", 18, true, ["Đá banh", "Cầu lông"], "triet@gmail.com")
let hang = new Student("hang", 28, false, ["nhảy dây", "banh đủa"], "hang@gmail.com")
// console.log(triet.greeting())
// console.log(hang.greeting())
// console.log(hang.getHobbies())
// hang.setHobbies("Nghe nhạc")
// console.log(hang.getHobbies())

// let arr = new Array()
// arr.slice()

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function () {
        return this.width * this.height;
    }
    this.getPerimeter = function () {
        return (this.width + this.height) * 2;
    }
}

// let rec1 = new Rectangle(5, 10)
// console.log(rec1.getArea())
// console.log(rec1.getPerimeter())

// let rec2 = new Rectangle(15, 105)
// console.log(rec2.getArea())
// console.log(rec2.getPerimeter())
// document.querySelector('input[type=button]').addEventListener("click", function(){
//     let width = Number(document.querySelector("input[name=width]").value);
//     let height = Number(document.querySelector("input[name=height]").value);
//     let rec = new Rectangle(width, height);
//     document.querySelector("input[name=area]").value = rec.getArea()
//     document.querySelector("input[name=perimeter]").value = rec.getPerimeter()
// })

function Calculator() {
    this.add = function (...rest) {
        return rest.reduce(function (total, number) {
            return total += number;
        })
    }
}

let calc = new Calculator()
console.log(calc.add(4, 5, 6, 7, 7, 8, 9, 9, 0, 6, 5, 4, 3))

Array.prototype.join2 = function (separator = ";") {
    let str = "";
    for (let i = 0; i < this.length; i++) {
        if(i != this.length - 1){
            str += this[i] + separator;
        }
        else{
            str += this[i];
        }
    }
    return str;
}
let array = new Array(1, 2, 4, 5, 6, 7, 8, 8, 9, 0, 8)
console.log(array.join2("+"));