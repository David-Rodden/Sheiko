import React, {Component} from "react";
import ExerciseType from "./ExerciseType";

export default class ExerciseRoutine extends Component {
    render() {
        let exerciseRoutine;
        if (this.props.exerciseDay.routine) {
            let routineKey = 0;
            exerciseRoutine = this.props.exerciseDay.routine.map(routine => {
                return <ExerciseType key={routine.exercise + routineKey++} routine={routine}/>
            });
        }
        return (
            <div className="ExerciseRoutine" style={{marginLeft: "15%"}}>
                <h2 style={{fontFamily: "Arima Madurai, cursive", fontSize: 30}}>{this.props.exerciseDay.day}
                    - {this.props.exerciseDay.routine.length} exercises</h2>
                <hr/>
                {exerciseRoutine}
                <br/>
            </div>
        )
    }

}