// 1. Phải là 1 hàm
// 2. Truyền qua đối số (agrument) của 1 hàm khác
// 3. Phải được thực thi

// let numbers = [1,3,4,5,5];
// function callback(preValue, currValue){
//     return preValue + currValue;
// }
// let result = numbers.reduce(callback) //ben trong reduce phải callback()
// console.log(result)

function callback(n1, n2){
    console.log(n1 + n2);
}


function useCallBack(arg){
    // console.log(typeof agr);
    arg(5, 7)
}

useCallBack(callback)