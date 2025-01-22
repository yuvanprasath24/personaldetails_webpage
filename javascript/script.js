const feedback = document.getElementById('feedback-container')
const body = document.querySelector('body')
const navbar = document.getElementById('navbar')
const toggle = document.getElementById('darkmode_toggle');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    feedback.classList.toggle('active');
    navbar.classList.toggle('active');
}
 
var ddate = document.getElementById('ddate');

var currentDateTime = new Date();

var cDate = currentDateTime.getDate();
var cMonth = currentDateTime.getMonth()+1;
var cYear = currentDateTime.getFullYear();

// var cHour = currentDateTime.getHours();
// var cMin = currentDateTime.getMinutes();
// var cSec = currentDateTime.getSeconds();

var dispDate = cDate + '-' + cMonth + '-' + cYear;

ddate.innerText = dispDate;