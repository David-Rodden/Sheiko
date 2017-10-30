import React, {Component} from "react";

class ExerciseTask extends Component {
    render() {
        return (<div className="ExerciseTask">
            {this.props.task.sets} Sets of {this.props.task.reps} reps at {this.props.task.effort * 100}% Effort
        </div>);
    }
}

export default ExerciseTask;