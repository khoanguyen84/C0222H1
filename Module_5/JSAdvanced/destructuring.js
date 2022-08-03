
// let scores = [7.6, 5.6, 8.7];
// let toan = scores[0];
// let ly = scores[1];
// let hoa = scores[2];

// let [toan, ly, hoa] = scores;
// console.log(`toan`, toan);
// console.log(`ly`, ly);
// console.log(`hoa`, hoa);

// let [toan, ly] = scores;
// console.log(`toan`, toan);
// console.log(`ly`, ly);


let obj = {
    name: "Khoa",
    age: 18,
    gender: true,
    hello: function () {
        console.log('hello world');
    },
    language: {
        name : "English",
        level : "A"
    }
}

// let { hello } = obj;
// hello();
// obj.hello();
// let { language } = obj;
// let { name } = language;
let { name } = obj.language;
console.log(name)
