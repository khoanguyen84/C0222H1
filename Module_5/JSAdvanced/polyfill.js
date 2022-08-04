import additional from "./myMath.js";
const jobs = ["Lau nhà", "Nấu cơm", "Quét nhà", "Đón con", "Lau nhà lần nữa"];


if(Array.prototype.map2 == undefined){
    Array.prototype.map2 = function(callback){
        let result = [];
        for(let i = 0; i < this.length; i++){
            let afterMap = callback(this[i]);
            result.push(afterMap);
        }

        return result;
    }

}
function useCallback(job){
    return `<li>${job}</li>`;

}
let htmls = jobs.map2(useCallback);
document.querySelector('#divJobs>ul').innerHTML = htmls.join("");


if(Array.prototype.includes2 == undefined){
    Array.prototype.includes2 = function(value){
        for(let i = 0; i< this.length; i++){
            if(this[i] == value){
                return true;
            }
        }
        return false;
    }
}

let numbers = [2,4,6,7,87];
numbers.includes2(4);


// apply
// bind
// call