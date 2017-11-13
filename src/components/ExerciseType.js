import React, {Component} from 'react';
import ExerciseTask from "./ExerciseTask";
import benchpress from '../img/benchpress.png';
import squat from '../img/squat.png';
import flies from '../img/flies.png';
import abs from '../img/abs.png';
import pushup from '../img/pushup.png';
import other from '../img/other.png';

export default class ExerciseType extends Component {
    render() {
        let exerciseType;
        if (this.props.routine.tasks) {
            let taskKey = 0;
            exerciseType = this.props.routine.tasks.map(task => {
                return <ExerciseTask key={taskKey++} task={task}/>
            });
        }

        function determineImage(exercise) {
            return exercise.includes("Bench") ? benchpress : exercise.includes("Squat") ? squat : exercise.includes("Fly") ? flies : exercise.includes("Abs") ? abs : exercise.includes("Push up") ? pushup : other;
        }

        return (<div className="ExerciseType" style={{backgroundColor: "#f9fbff"}}>
            <h3 style={{
                fontFamily: "Arima Madurai, cursive",
                fontSize: 23
            }}>{this.props.routine.exercise.charAt(0).toUpperCase() + this.props.routine.exercise.slice(1)}</h3>
            <div style={{float: "left", whiteSpace: "nowrap"}}>
                {exerciseType}
            </div>
            <img id="exercise-picture" src={determineImage(this.props.routine.exercise)}
                 data-tip={this.props.routine.exercise}/>
        </div>);
    }
}
