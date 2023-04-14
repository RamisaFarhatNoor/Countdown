const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minsEl=document.getElementById("mins");
const secEl=document.getElementById("seconds");

let given_date = "1 Jan 2024";

function countdown(){
    let new_date= new Date(given_date);
    const current_date= new Date();
    const totalsec=Math.floor(new_date-current_date)/1000;
    const mins=Math.floor(totalsec/60) %24 % 60;
    const hours=Math.floor(totalsec/3600)% 24;
    const days= Math.floor(totalsec/3600/24);
    const sec= Math.floor(totalsec)%60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = format(hours);
    minsEl.innerHTML = format(mins);
    secEl.innerHTML = format(sec);




    console.log(days,hours,mins,sec);



}
function format(time){

    return time < 10 ? "0"+time : time; 
}
countdown();
setInterval(countdown,1000);
