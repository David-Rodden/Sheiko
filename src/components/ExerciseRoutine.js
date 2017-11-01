import React, {Component} from "react";
import ExerciseType from "./ExerciseType";
import other from "../img/other.png";

class ExerciseRoutine extends Component {
    render() {
        let exerciseRoutine;
        if (this.props.exerciseDay.routine) {
            let routineKey = 0;
            exerciseRoutine = this.props.exerciseDay.routine.map(routine => {
                return <ExerciseType key={routine.exercise + routineKey++} routine={routine}/>
            });
        }
        const style = {
            marginLeft: "15%"
        };
        return (
            <div className="ExerciseRoutine" style={style}>
                <h2 style={{fontFamily: "Arima Madurai, cursive", fontSize: 30}}>{this.props.exerciseDay.day} - {this.props.exerciseDay.routine.length} exercises</h2>
                <hr/>
                {exerciseRoutine}
                <br/>
            </div>
        )
    }

}

export default ExerciseRoutine;