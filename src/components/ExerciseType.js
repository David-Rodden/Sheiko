import React, {Component} from 'react';
import ExerciseTask from "./ExerciseTask";
import benchpress from '../img/benchpress.png';
import squat from '../img/squat.png';
import flies from '../img/flies.png';
import abs from '../img/abs.png';
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
            border: "1px solid grey",
            borderRadius: "15px",
            marginBottom: "2%",
            display: "auto"
        };

        function determineImage(exercise) {
            return exercise.includes("bench") ? benchpress : exercise.includes("squat") ? squat : exercise.includes("flies") ? flies : exercise.includes("abs") ? abs : other;
        }

        return (<div className="ExerciseType" style={style}>
            <h3>{this.props.routine.exercise.charAt(0).toUpperCase() + this.props.routine.exercise.slice(1)}</h3>
            <div>
                {exerciseType}
                <img src={determineImage(this.props.routine.exercise)} alt=""/>
            </div>
        </div>);
    }
}

export default ExerciseType;