import React, {Component} from "react";

class ExerciseItem extends Component {
    render() {
        return (
            <li className="Exercise">
                {this.props.exercise.title} - {this.props.exercise.category}
            </li>
        )
    }

}

export default ExerciseItem;