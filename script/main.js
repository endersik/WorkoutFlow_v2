import { Begin, secondsElapsed } from './timer.js';
import { SetImage, SetImgName } from './setImg.js';
import { ControlTransition, isExercise } from './transition.js';

Begin()

ControlTransition(secondsElapsed)

SetImage(isExercise)
SetImgName(isExercise)







