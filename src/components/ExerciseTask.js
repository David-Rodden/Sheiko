import React, {Component} from "react";
import ReactToolTip from 'react-tooltip'
import itim from '../App.css'

class ExerciseTask extends Component {
    render() {
        const style = {
            textAlign: "center",
            marginBottom: "1%",
            fontFamily: "Itim, cursive"
        };

        return (<li className="ExerciseTask" style={style}>
            {this.props.task.sets} Sets of {this.props.task.reps} reps at {Math.round(this.props.task.effort * 100)}%
            effort
            &nbsp;&nbsp;&nbsp;<input type="checkbox" data-tip="Done"/>
            <ReactToolTip/>
        </li>);
    }
}

export default ExerciseTask;