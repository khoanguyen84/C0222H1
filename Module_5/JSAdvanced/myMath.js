function additional(...rest){
    let result = 0;
    for(let i = 0; i <rest.length;i++){
        result += rest[i];
    }

    return result;
}

export function multiple(...rest){
    let result = 1;
    for(let i = 0; i <rest.length;i++){
        result *= rest[i];
    }

    return result;
}

export function subtract(...rest){
    let result = 0;
    for(let i = 0; i <rest.length;i++){
        result -= rest[i];
    }

    return result;
}
export default additional;

// {
//     additional(),
//     subtract()
// }