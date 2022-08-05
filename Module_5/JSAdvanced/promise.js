// setTimeout(function(){
//     console.log("1");
//     setTimeout(function(){
//         console.log("2")
//     },1000)
// },2000)
// setTimeout(function(){
//     console.log("1");
// },2000)

// setTimeout(function(){
//     console.log("2")
// },1000)

// callback hell
// promise chain

// let promise = new Promise(
    
//     function(resolve, reject){
//         // logic
//         let number = 4;
//         if(number >= 5)
//             return resolve({
//                 fulllname: "Khoa",
//                 age: 18,
//                 gender: true
//             });
//         return reject({
//             code: "404",
//             message: "Not found"
//         });
//     }
// )

// promise
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(error){
//         console.log(error);
//     })
//     .finally(function(){
//         console.log("Done");
//     })

const promise = new Promise(
    //executor
    function(resolve, reject){
        return resolve(1);
    }
)

promise.then(function(number){
        console.log(number);
        return ++number;
    }).then(function(number){
        console.log(number)
        return ++number;
    }).then(function(number){
        console.log(number)
        return ++number;
    })
    .catch(function(){

    })
    .finally(function(){

    })