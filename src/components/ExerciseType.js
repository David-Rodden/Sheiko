import React, {Component} from 'react';
import ExerciseTask from "./ExerciseTask";
import benchpress from '../img/benchpress.png';
import squat from '../img/squat.png';
import flies from '../img/flies.png';
import abs from '../img/abs.png';
import pushup from '../img/pushup.png';
import other from '../img/other.png';

class ExerciseType extends Component {

    render() {
        let exerciseType;
        if (this.props.routine.tasks) {
            let taskKey = 0;
            exerciseType = this.props.routine.tasks.map(task => {
                return <ExerciseTask key={taskKey++} task={task}/>
            });
        }
        const style = {
            textAlign: "center",
            marginLeft: "20%",
            marginRight: "40%",
            border: "2px solid grey",
            borderRadius: "15px",
            marginBottom: "2%"
        };

        function determineImage(exercise) {
            return exercise.includes("Bench") ? benchpress : exercise.includes("Squat") ? squat : exercise.includes("Fly") ? flies : exercise.includes("Abs") ? abs : exercise.includes("Push up") ? pushup : other;
        }

        return (<div className="ExerciseType" style={style}>
            <h3 style={{
                fontFamily: "Arima Madurai, cursive",
                fontSize: 23
            }}>{this.props.routine.exercise.charAt(0).toUpperCase() + this.props.routine.exercise.slice(1)}</h3>
            <div style={{float: "left"}}>
                {exerciseType}
            </div>
            <img id="exercise-picture" src={determineImage(this.props.routine.exercise)} alt=""
                 data-tip={this.props.routine.exercise}/>
        </div>);
    }
}

export default ExerciseType;
