import React, {Component} from "react";
import ReactToolTip from 'react-tooltip'

class ExerciseTask extends Component {
    render() {
        const style = {
            textAlign: "center",
            marginBottom: "1%",

        };

        return (<li className="ExerciseTask" style={style}>
            {this.props.task.sets} Sets of {this.props.task.reps} reps at {this.props.task.effort * 100}% effort
            &nbsp;&nbsp;&nbsp;<input type="checkbox" data-tip="Done"/>
            <ReactToolTip/>
        </li>);
    }
}

export default ExerciseTask;