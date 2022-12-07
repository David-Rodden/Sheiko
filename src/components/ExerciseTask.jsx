import React, {Component} from "react";
import ReactToolTip from 'react-tooltip'
import weight45 from "../img/45lbs.png";
import weight35 from "../img/35lbs.png";

export default class ExerciseTask extends Component {
    render() {
        const effort = this.props.task.effort !== 0 ? Math.round(this.props.task.effort * 100) + "%" : "a comfortable";
        return (<li className="ExerciseTask">
            {this.props.task.sets} Sets of {this.props.task.reps} reps at {effort} effort
            {/*<img src={weight35} style={{width: "2.3%", float: "right"}} alt=""/>*/}
            {/*<img src={weight45} style={{width: "2.3%", float: "right"}} alt=""/>*/}
            <ReactToolTip/>
        </li>);
    }
}
