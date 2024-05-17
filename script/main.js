import { startClock } from './timer.js';
export {workoutScreen};



const homeScreen = document.querySelector(".home")
const workoutScreen = document.querySelector(".workout")
const begin = document.querySelector(".begin")

begin.addEventListener("click", () => {
    homeScreen.style.display = "none"
    workoutScreen.style.display = "block"
    startClock()
})


