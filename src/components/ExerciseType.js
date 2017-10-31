import React, {Component} from 'react';
import ExerciseTask from "./ExerciseTask";

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
        return (<div className="ExerciseType" style={style}>
            <h3>{this.props.routine.exercise.charAt(0).toUpperCase() + this.props.routine.exercise.slice(1)}</h3>
            {exerciseType}
        </div>);
    }
}

export default ExerciseType;