import React, {Component} from 'react';
import ExerciseItem from './ExerciseRoutine';

class ExerciseDay extends Component {
    render() {
        let exerciseRoutines;
        if (this.props.exerciseDays) {
            exerciseRoutines = this.props.exerciseDays.map(exerciseDay => {
                return (<ExerciseItem key={exerciseDay.day} exerciseDay={exerciseDay}/>);
            });
        }
        return (
            <div className="ExerciseDay">
                {exerciseRoutines}
            </div>
        );
    }
}

export default ExerciseDay;