let daysItem = document.querySelector("#days")
let hourItem = document.querySelector("#hours")
let mintuesItem = document.querySelector("#min") 
let SecondsItem = document.querySelector("#sec")

let countDown = () => {
    let fuDate = new Date("24 march 2023");
    let curruDate = new Date();
    let iamDate = fuDate - curruDate;

    let days = Math.floor(iamDate/ 1000 / 60 / 60 / 24);
    let hour = Math.floor(iamDate/ 1000 / 60 / 60) % 24;
    let mintues = Math.floor(iamDate/ 1000 / 60 ) % 60;
    let Seconds = Math.floor(iamDate/ 1000) % 60;

    daysItem.innerHTML = days;
    hourItem.innerHTML = hour;
    mintuesItem.innerHTML = mintues;
    SecondsItem.innerHTML = Seconds;
}
countDown();
setInterval(countDown,1000);