
// logic
// 12 hour = 360deg
// 1 hour = 360/12 = 30
// h hour = 30h

// for an hour
// 60 min = 30
// 1 min = 30/60 =1/2
// m mins = (1/2)


// for minute 
// 60 min = 360deg
// 1 min = 360/60 = 6deg
// m min = 6m

// for second 
// 60sec = 360deg
// 1sec = 360/60 = 6deg
// s secs = 6s


let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();


    //Getting hour, mins, secs from date

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();


    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;


    hr.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotation}deg)`;

    sec.style.transform=`rotate(${sRotation}deg)`;


}

setInterval(displayTime, 1000)

console.log("helo")