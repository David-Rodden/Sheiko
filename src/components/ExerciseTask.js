import React, {Component} from "react";

class ExerciseTask extends Component {
    render() {
        const style = {
            textAlign: "center",
            marginBottom: "1%"
        };
        return (<li className="ExerciseTask" style={style}>
            {this.props.task.sets} Sets of {this.props.task.reps} reps at {this.props.task.effort * 100}% Effort
            &nbsp;&nbsp;&nbsp;<input type="checkbox"/>
        </li>);
    }
}

export default ExerciseTask;