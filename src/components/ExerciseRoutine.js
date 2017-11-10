import React, {Component} from "react";
import ExerciseType from "./ExerciseType";
import show from '../img/show.png';
import hide from '../img/hide.png';

export default class ExerciseRoutine extends Component {
    constructor() {
        super();
        this.state = {showExerciseType: true};
    }

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
                <div>
                    <h2 style={{
                        fontFamily: "Arima Madurai, cursive",
                        fontSize: 30,
                        display: "inline"
                    }}>{this.props.exerciseDay.day}
                        - {this.props.exerciseDay.routine.length} exercises</h2>
                    &nbsp;&nbsp;&nbsp;
                    <img src={this.state.showExerciseType ? hide : show}
                         style={{width: this.state.showExerciseType? "2%": "2%", transform: "translateY(22%)"}} alt=""
                         onClick={() => this.setState({showExerciseType: !this.state.showExerciseType})}/>
                </div>
                <hr/>
                {this.state.showExerciseType ? exerciseRoutine : null}
                <br/>
            </div>
        )
    }

}