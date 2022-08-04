class Student{
    constructor(fullname, age){
        this.fullname = fullname;
        this.age = age;
    }
    greeting(){
        console.log(`Fullname: ${this.fullname}, age: ${this.fullname}`);
    }
    // getAge(){
    //     console.log(this.age);
    // }
}

Student.prototype.getAge = function(){
    console.log(this.age);
}

let phuong = new Student("Phương", 18);
phuong.getAge();