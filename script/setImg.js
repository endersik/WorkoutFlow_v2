export {SetImage, SetImgName}

const imgName = document.getElementById(".imgName")
const img = document.getElementById(".img")

const exerciseNames = ["Push Ups", "Burpees", "Plank"];
const exerciseImages = ["https://www.spotebi.com/wp-content/uploads/2014/10/push-up-exercise-illustration.jpg"
                        , "https://www.spotebi.com/wp-content/uploads/2014/10/burpees-exercise-illustration.jpg"
                        , "https://www.spotebi.com/wp-content/uploads/2014/10/plank-exercise-illustration.jpg"
                    ];

let currentExerciseIndex = 0;

function SetImage(isExercise){
    isExercise ? SetExerciseImg() : SetCountdown();
    currentExerciseIndex++;
}

function SetImgName(isExercise){
    isExercise ? SetExerciseName() : SetCountdownMessage(); 
}

function SetCountdown(){
    img.src = "https://static.wixstatic.com/media/829a0c_8213058785204a75bfb1f904747d78c0~mv2.png";
}

function SetCountdownMessage() {
    imgName.innerHTML = "Get ready!";
}

function SetExerciseImg() {
    img.src = exerciseImages[currentExerciseIndex];
}

function SetExerciseName(index) {
    imgName.innerHTML = exerciseNames[currentExerciseIndex];
}