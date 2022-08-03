function showTime(){
    document.getElementsByTagName("button")[1].innerHTML = new Date();
    // btn.innerHTML = new Date();
}
function hiddenTime(){
    document.getElementsByTagName("button")[1].innerHTML = "Hover to show current time";
}