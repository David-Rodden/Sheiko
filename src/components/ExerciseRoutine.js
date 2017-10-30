import React, {Component} from "react";
import ExerciseType from "./ExerciseType";

class ExerciseRoutine extends Component {
    render() {
        let exerciseRoutine;
        if (this.props.exerciseDay.routine) {
            exerciseRoutine = this.props.exerciseDay.routine.map(routine => {
                return <ExerciseType key={routine.exercise} routine={routine}/>
            });
        }
        return (
            <div className="ExerciseRoutine">
                <strong>{this.props.exerciseDay.day}</strong>
                {exerciseRoutine}
                <br/>
            </div>
        )
    }

}

export default ExerciseRoutine;