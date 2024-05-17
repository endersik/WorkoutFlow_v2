export {setImage, setExerciseName}

const exerciseName = document.getElementById("exerciseName");
const exerciseImage = document.getElementById("exerciseImg");

const exerciseNames = ["Current Workout", "Push Ups", "Arch Up", "Burpees", "Bridge Race", "Knee to Elbow Plank", "Lunges", "Site to Site Plank"];
const exerciseImages = ["images/start-stopwatch.jpeg", "images/push-ups.png", "images/arch-up.png", "images/burpees.png", "images/bridge-race.png", "images/knee-to-elbow-plank.png", "images/lunges.png", "images/site-to-site-plank.png"];

let currentExerciseIndex = 0;
let exerciseTime = 0;

function setImage(){
    exerciseImage.src = exerciseImages[currentExerciseIndex];
}

function setExerciseName(){
    exerciseName.innerHTML = exerciseNames[currentExerciseIndex+1];
}