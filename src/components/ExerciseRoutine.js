import React, {Component} from "react";
import ExerciseType from "./ExerciseType";

class ExerciseRoutine extends Component {
    render() {
        let exerciseRoutine;
        if (this.props.exerciseDay.routine) {
            let routineKey = 0;
            exerciseRoutine = this.props.exerciseDay.routine.map(routine => {
                return <ExerciseType key={routine.exercise + routineKey++} routine={routine}/>
            });
        }
        return (
            <div className="ExerciseRoutine">
                <h2>{this.props.exerciseDay.day}</h2>
                {exerciseRoutine}
                <br/>
            </div>
        )
    }

}

export default ExerciseRoutine;