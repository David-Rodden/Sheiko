import React, {Component} from 'react';
import ExerciseItem from './ExerciseItem';

class Exercises extends Component {
    render() {
        let exerciseItems;
        if (this.props.exercises) {
            exerciseItems = this.props.exercises.map(exercise => {
                return (<ExerciseItem key={exercise.day} exercise={exercise}/>);
            });
        }
        return (
            <div className="Exercises">
                {exerciseItems}
            </div>
        );
    }
}

export default Exercises;