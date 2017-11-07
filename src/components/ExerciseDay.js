import React, {Component} from 'react';
import ExerciseItem from './ExerciseRoutine';

class ExerciseDay extends Component {
    constructor() {
        super();
        const experience = localStorage["experience"];
        const numeric = experience === "beginner" ? "29" : experience === "intermediate" ? "30" : "31";
        this.sheikoData = require("../programs/Sheiko" + numeric + ".json");
        console.log("Sheiko" + numeric + " loaded");
    }

    render() {
        let exerciseRoutines;
        if (this.sheikoData) {
            exerciseRoutines = this.sheikoData.map(exerciseDay => {
                return (<ExerciseItem key={exerciseDay.day} exerciseDay={exerciseDay}/>);
            });
        }
        const style = {
            textAlign: "left",
            background: "#f2f6ff"
        };
        return (
            <div className="ExerciseDay" style={style}>
                {exerciseRoutines}
            </div>
        );
    }
}

export default ExerciseDay;