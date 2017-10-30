import React, {Component} from "react";

class ExerciseRoutine extends Component {
    render() {
        let exerciseRoutine;
        if (this.props.exerciseDay.routine) {
            console.log(this.props.exerciseDay.day);
            exerciseRoutine = this.props.exerciseDay.routine.map(routine => {
                console.log(routine);
            });
        }
        return (
            <li className="ExerciseRoutine">
                {this.props.exerciseDay.day} - Routine
            </li>
        )
    }

}

export default ExerciseRoutine;