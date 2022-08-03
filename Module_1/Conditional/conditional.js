// let dtb = 7.5 //Number(prompt("Nhap diem tb: "));
// if (dtb >= 5)
//     if (dtb >= 7)
//         if (dtb >= 8)
//             if (dbt >= 9) console.log("Xuat sac");
//             else console.log("Gioi");
//         else console.log("Kha");
//     else console.log("Trung binh");
// else console.log("Yeu");
// let dtb = parseInt(prompt('nhập điểm'));
// let dtb = 8.1;
// if (dtb >= 9) {
//     console.log('xs')
// };
// if (dtb >= 8 && dtb < 9) {
//     console.log('G')
// };
// if (dtb >= 7 && dtb < 8) {
//     console.log('K')
// };
// if (dtb >= 5 && dtb < 7) {
//     console.log('tb')
// };
// if (dtb < 5) {
//     console.log('y')
// };
// let mark = -10.6; //parseInt(prompt("Enter the mark:", ""));
// if (mark >= 9) {
//     console.log("Xuất sắc");
// } else if (mark >= 8) {
//     console.log("Giỏi");
// } else if (mark >= 7) {
//     console.log("Khá");
// } else if (mark >= 5) {
//     console.log("Trung bình");
// } else {
//     console.log("Yếu");
// }

// let name = "Khoa" // Thi
// let gender = true; // False

// Hello, Mr.Khoa
// Hello, Mrs. Thi

// let name = "Thi";
// let gender = false;
// let married = true;
// console.log(`Hello, ${gender ? 'Mr' : (married ? 'Mrs' : 'Ms')}.${name}`);
// if (gender) {
//     console.log("Hello Mr." + name);
// } else console.log("Hello Ms." + name);

// let a = 5, b = 6, c = 1;
// console.log(a + 'x2' + " + " + b + "x" + " + " + c + " = 0")
// console.log(`${a}x2 + ${b}x + ${c} = 0`)
// 5x2 + 6x + 1 = 0;
// let a = 5, b = 6, c = 1;
// let result = (a > b && a > c) ? a : (b > c) ? b : c;
// console.log(result);
// console.log(`Max is: ${(a > b && a > c) ? a : (b > c) ? b : c}`);

// let aveScore = -8.4;

// let message = ((aveScore < 0 || aveScore > 10) ?
//     "Invalide"
//     : (aveScore >= 9 ?
//         "Exelence"
//         : (aveScore >= 8 ?
//             "Very Good"
//             : (aveScore >= 7 ?
//                 "Good"
//                 : (aveScore > 5 ?
//                     "Medium" : "Bad")))));
// console.log(message)
// let month = 2;
// let result = "";
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//     {
//         result = `Tháng ${month} có 31 ngày`;
//         break;
//     }
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         result = "Tháng " + month + " có 30 ngày";
//         break;
//     case 2:
//         result = "Tháng " + month + " có 28 hoặc 29 ngày";
//         break;
//     default:
//         result = "Đây không phải là tháng";
//         break;
// }
// console.log(result);

// let dtb = 12
// switch (true) {
//     case (dtb > 10 || dtb < 0):
//         console.log("Số không thích hợp");
//         break;
//     case (dtb >= 9 && dtb <= 10):
//         console.log("Xuất sắc");
//         break
//     case (dtb >= 8 && dtb < 9):
//         console.log("Giỏi");
//         break;
//     case (dtb >= 7 && dtb < 8):
//         console.log("Khá");
//         break;
//     case (dtb >= 5 && dtb < 7):
//         console.log("Trung bình");
//         break;
//     case (dtb < 5):
//         console.log("Yếu");
//         break;
// }

// let dtb = 12;
// switch (Math.floor(dtb)) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log("Yếu");
//         break;
//     case 5:
//     case 6:
//         console.log("TB");
//         break
//     case 7:
//         console.log("Khá");
//         break;
//     case 8:
//         console.log("Giỏi");
//         break;
//     case 9:
//     case 10:
//         console.log("Xuất sắc");
//         break;
//     default:
//         console.log("Không hợp lệ");
//         break;
// }
let dtb = 7.2;
switch (dtb < 0 || dtb > 10 ? 'Invalid' : dtb >= 9 ? "A" : dtb >= 8 ? "B" : dtb >=7 ? "C" : dtb >=5 ? "D" : "E") {
    case "E":
        console.log("Yếu");
        break;
    case "D":
        console.log("TB");
        break
    case "C":
        console.log("Khá");
        break;
    case "B":
        console.log("Giỏi");
        break;
    case "A":
        console.log("Xuất sắc");
        break;
    default:
        console.log("Không hợp lệ");
        break;
}