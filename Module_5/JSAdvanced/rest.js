// parameter vs agrument

// function sum() {
//     // console.log(arguments);
//     let result = 0;
//     for(let i= 0; i < arguments.length; i++){
//         result += arguments[i]
//     }
//     console.log(result);
// }

// function sum(four, six, ...rest){
//     let result = 0;
//     for(let i= 0; i < rest.length; i++){
//         result += rest[i]
//     }
//     console.log(`four value: ${four}`);
//     console.log(`six value: ${six}`);
//     console.log(result);
// }
// sum(4, 6, 6, 8, 8, 9, 9);
// function sum(...rest){
//     let result = 0;
//     for(let i= 0; i < rest.length; i++){
//         result += rest[i]
//     }
//     console.log(result);
// }

// let numbers = [1,2,3,4,5,6];
// sum(...numbers)

function greeting(...rest){
    let {name, gender, age} = rest[0];
    console.log(name);
    console.log(gender);
    console.log(age);

}

greeting({
    name : "Khoa",
    age : 18,
    gender : true
})