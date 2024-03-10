const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const Summer = "1 June 2024";
function countdown() {
    const SummerDate = new Date(Summer);
    const currentDate = new Date();
    const TotalSeconds = (SummerDate - currentDate) / 1000;
    const days = Math.floor(TotalSeconds / 3600 / 24);
    const hours = Math.floor(TotalSeconds / 3600) % 24;
    const mins = Math.floor(TotalSeconds / 60) % 60;
    const seconds = Math.floor(TotalSeconds) % 60;
    console.log(days, hours, mins, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;

}
countdown();
setInterval(countdown, 1000);

