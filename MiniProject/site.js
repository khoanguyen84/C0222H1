const courses = [
    "Javascript",
    "JAVA",
    "PHP Laravel",
    "NET Core"
]

// const htmls = courses.map(function(course){
//     return `<li>${course}</li>`
// })
// document.querySelector("ol").innerHTML = htmls.join("")
// let htmls = "";
// courses.forEach(function(course){
//     htmls+=`<li>${course}</li>`
// })
// document.querySelector("ol").innerHTML = htmls;

function addCourse() {
    // Bước 1: lấy dữ liệu ở input -> push mảng courses
    let courseName = document.querySelector("#courseName").value;
    courses.push(courseName);
    document.querySelector("#courseName").value = "";
    // Bước 2: hiển thị dữ liệu trong mảng courses màn  hình
    renderCourse();
}

function renderCourse() {
    const htmls = courses.map(function (course, index) {
        return `
                    <li>${course} 
                        <a 
                            href='javascript:;'
                            onclick='removeCourse(${index})'
                        >&times;</a>
                    </li>
                `
    })
    document.querySelector("ol").innerHTML = htmls.join("")
}

function removeCourse(position){
    courses.splice(position, 1);
    renderCourse();
}
renderCourse();