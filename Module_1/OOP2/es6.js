function Student(fullname, age, gender, hobbies, email){
    this.fullname = fullname;
    this.age = age;
    this.gender = gender;
    this.hobbies = hobbies;
    this.email = email;

    this.greeting = function(){
        return `My name is ${this.gender ? 'Mr' : 'Ms'}.${this.fullname}`
    }
}

class Staff{
    constructor(fullname, age, gender, hobbies, email){
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
        this.hobbies = hobbies;
        this.email = email
    }
    greeting(){
        return `My name is ${this.gender ? 'Mr' : 'Ms'}.${this.fullname}`
    }
    static slogen(){
        return 'Still breathe still alive'
    }
}
class Teacher extends Staff{
    constructor(fullname, age, gender, hobbies, email, courses){
        super(fullname, age , gender, hobbies, email);
        this.courses = courses;
    }
    greeting(){
        return `${super.greeting()}, I teach these courses: ${this.courses.join()}`
    }
    addCourse(course){
        this.courses.push(course);
    }
    // introduction(){
    //     return `My name is ${this.gender ? 'Mr' : 'Ms'}.${this.fullname}, I teach these courses: ${this.courses.join()}`
    // }
}

// let han = new Teacher("Han", 28, true, [], "han@gmail.com", ["JavaScript","ReactJS"]);
// // console.log(han.introduction())
// han.addCourse("Java")
// console.log(han.slogen())
let khoa = new Staff("khoa", 28, true, [], "khoa@gmail.com")
console.log(Teacher.slogen())

// Math.random()
// Math.floor()

// let array = new Array();
// array.concat()

class MyMath{
    static sqrt(number){
        return Math.sqrt(number);
    }
    static sum(...rest){
        // return rest.reduce(function(total, number){
        //     return total += number;
        // })
        return rest.reduce((total, number) => total += number)
    }
}

// console.log(MyMath.sum(4,5,6,7,7,4,3,3,9,3,4,5,6,))
// Arrow Function

// const sum = function(n1, n2){
//     return n1 + n2;
// }
const sum = (n1, n2) => n1 + n2;

// let power2 = function(n){
//     console.log(n**2);
// }
let power2 = n => console.log(n**2);

// let hello = function(){
//     console.log("Hello everyone!")
// }
let hello = () => console.log("Hello everyone!")

// const checkEvenNumber = function(number){
//     if(number % 2 == 0)
//         return true;
//     return false;
// }
const checkEvenNumber = (number) => {
    if(number % 2 == 0)
        return true;
    return false;
}
// console.log(sum(5,6))
// power2(5)
hello()

