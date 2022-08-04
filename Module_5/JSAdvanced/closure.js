// function counterApp(){
//     let count = 0;
//     function increment(){
//         return ++count;
//     }
//     return increment;
// }

// let counter = counterApp();
// console.log(counter());
// console.log(counter());

// let counter_1 = counterApp();
// console.log(counter_1());
// console.log(counter_1());

// let jobs = []
let jobApp = {
    jobs: [],
    addJob(jobName){
        jobs.push(jobName);
    },
    getJobs(){
        console.log(jobs)
    }
};

function jobApp() {
    let jobs = [];
    return {
        addJob(jobName) {
            jobs.push(jobName);
        },
        getJobs() {
            console.log(jobs)
        }
    }
}

let app = jobApp();
// console.log(app)
app.addJob("Lau nhà");
app.addJob("Nấu cơm");
jobs = 'sdfsdfs';
app.getJobs();