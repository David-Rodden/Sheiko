import React, {Component} from "react";
import ReactToolTip from 'react-tooltip'

export default class ExerciseTask extends Component {
    render() {
        const effort = this.props.task.effort !== 0 ? Math.round(this.props.task.effort * 100) + "%" : "a comfortable";
        return (<li className="ExerciseTask">
            {this.props.task.sets} Sets of {this.props.task.reps} reps at {effort} effort
            <ReactToolTip/>
        </li>);
    }
}
