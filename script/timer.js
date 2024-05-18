export {Begin, secondsElapsed}

let secondsElapsed = 0;
let interval = null;
const time = document.querySelector("time")

const padStart = (value) => String(value).padStart(2, "0");

const homeScreen = document.querySelector(".home")
const workoutScreen = document.querySelector(".workout")
const begin = document.querySelector(".begin")

function Begin(){
    begin.addEventListener("click", () => {
        homeScreen.style.display = "none"
        workoutScreen.style.display = "block"
        StartClock()
    })
}

function SetTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    workoutScreen.querySelector(
        ".time"
    ).textContent = `${padStart(minutes)}:${padStart(seconds)}`;
}

function Timer() {
    secondsElapsed++;
    SetTime()
}

export function StartClock() {
    if (interval) StopClock()
    interval = setInterval(Timer, 1000)
}

function StopClock() {
    clearInterval(interval)
}

function ResetClock() {
    StopClock()
    secondsElapsed = 0;
    SetTime()
}


const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const reset = document.querySelector(".reset")

start.addEventListener("click", () => StartClock())
stop.addEventListener("click", () => StopClock())
reset.addEventListener("click", () => ResetClock())