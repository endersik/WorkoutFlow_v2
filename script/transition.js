export {ControlTransition, isExercise}

let showtimeImg = 0;
let isExercise = false;

function ControlTransition(timePassed) {
    if(timePassed > showtimeImg){
        if(!isExercise) {
            showtimeImg += 5;
        }
        else {
            showtimeImg += 20;
        }
    }
}