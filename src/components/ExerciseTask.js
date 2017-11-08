import React, {Component} from "react";
import ReactToolTip from 'react-tooltip'

class ExerciseTask extends Component {
    render() {
        const style = {
            textAlign: "center",
            marginBottom: "1%",
            fontFamily: "Itim, cursive"
        };
        const effort = this.props.task.effort !== 0 ? Math.round(this.props.task.effort * 100) + "%" : "a comfortable";
        return (<li className="ExerciseTask" style={style}>
            {this.props.task.sets} Sets of {this.props.task.reps} reps at {effort} effort
            <ReactToolTip/>
        </li>);
    }
}

export default ExerciseTask;
