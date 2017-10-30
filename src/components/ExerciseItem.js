import React, {Component} from "react";

class ExerciseItem extends Component {
    render() {
        return (
            <li className="Exercise">
                {this.props.exercise.day} - Routine
            </li>
        )
    }

}

export default ExerciseItem;