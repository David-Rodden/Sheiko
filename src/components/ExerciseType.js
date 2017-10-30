import React, {Component} from 'react';

class ExerciseType extends Component {

    render() {
        let exerciseType;
        if (this.props.routine.tasks) {
            exerciseType = this.props.routine.tasks.map(task => {
                console.log(task.effort + ", " + task.sets + ", " + task.reps);
            });
        }
        return (<li className="ExerciseType">
            {this.props.routine.exercise} - Task goes here
        </li>)
    }

}

export default ExerciseType;