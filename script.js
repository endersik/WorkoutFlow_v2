const exerciseName = document.getElementById("exerciseName");
const exerciseImage = document.getElementById("exerciseImg");

const exerciseNames = ["Current Workout", "Push Ups", "Arch Up", "Burpees", "Bridge Race", "Knee to Elbow Plank", "Lunges", "Site to Site Plank"];
const exerciseImages = ["images/start-stopwatch.jpeg", "images/push-ups.png", "images/arch-up.png", "images/burpees.png", "images/bridge-race.png", "images/knee-to-elbow-plank.png", "images/lunges.png", "images/site-to-site-plank.png"];

const homeScreen = document.querySelector(".home")
const workoutScreen = document.querySelector(".workout")
const begin = document.querySelector(".begin")

let secondsElapsed = 0;
let interval = null;
const time = document.querySelector("time")

begin.addEventListener("click", () => {
    homeScreen.style.display = "none"
    workoutScreen.style.display = "block"
    startClock()
})

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
}

function startClock() {
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




let currentExerciseIndex = 0;
let exerciseTime = 0;

function setImage(){
    exerciseImage.src = exerciseImages[currentExerciseIndex];;
    setExerciseName()
}

function setExerciseName(){
    exerciseName.innerHTML = exerciseNames[currentExerciseIndex+1];
}
