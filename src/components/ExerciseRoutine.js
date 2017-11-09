import React, {Component} from "react";
import ExerciseType from "./ExerciseType";
import $ from 'jquery';

export default class ExerciseRoutine extends Component {
    render() {
        let exerciseRoutine;
        if (this.props.exerciseDay.routine) {
            let routineKey = 0;
            exerciseRoutine = this.props.exerciseDay.routine.map(routine => {
                return <ExerciseType key={routine.exercise + routineKey++} routine={routine}/>
            });
        }

        function hideRoutine(val) {
            console.log(val);
        }

        return (
            <div className="ExerciseRoutine" style={{marginLeft: "15%"}}>
                <div>
                    <h2 style={{
                        fontFamily: "Arima Madurai, cursive",
                        fontSize: 30,
                        display: "inline"
                    }}>{this.props.exerciseDay.day}
                        - {this.props.exerciseDay.routine.length} exercises</h2>
                    &nbsp;&nbsp;&nbsp;
                    <input type="button" value="hide" style={{fontFamily: "Itim, cursive", display: "inline", opacity: 0.7}} onClick={hideRoutine(this)}/>
                </div>
                <hr/>
                {exerciseRoutine}
                <br/>
            </div>
        )
    }

}