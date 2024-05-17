import { workoutScreen } from "./main.js";
import { setImage, setExerciseName } from "./image.js";

let secondsElapsed = 0;
let interval = null;
const time = document.querySelector("time")

const padStart = (value) => String(value).padStart(2, "0");


function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    workoutScreen.querySelector(
        ".time"
    ).textContent = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    secondsElapsed++;
    setTime()
    setImage()
    setExerciseName()
}

export function startClock() {
    if (interval) stopClock()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}


const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const reset = document.querySelector(".reset")

start.addEventListener("click", () => startClock())
stop.addEventListener("click", () => stopClock())
reset.addEventListener("click", () => resetClock())