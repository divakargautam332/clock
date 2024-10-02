let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

function displayTime(){
    let date = new Date();


    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrotation = 30*hh + mm/2;
    let mrotation = 6*mm;
    let srotation = 6*ss;

    hr.style.transform =`rotate(${hrotation}deg)`;
    min.style.transform =`rotate(${mrotation}deg)`;
    sec.style.transform =`rotate(${srotation}deg)`;
}


setInterval(displayTime,1000);