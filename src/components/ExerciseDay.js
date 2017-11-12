import React, {Component} from 'react';
import ExerciseItem from './ExerciseRoutine';
import ProgressionChart from "./ProgressionChart";

export default class ExerciseDay extends Component {
    constructor() {
        super();
        const experience = localStorage["experience"];
        const pageChosen = sessionStorage.getItem("page");
        this.numeric = pageChosen ? sessionStorage["page"] : experience === "No" ? "29" : experience === "Yes, once" ? "30" : "31";
        this.sheikoData = require("../programs/Sheiko" + this.numeric + ".json");
    }

    render() {
        let exerciseRoutines;
        if (this.sheikoData) {
            exerciseRoutines = this.sheikoData.map(exerciseDay => {
                return (<ExerciseItem key={exerciseDay.day} exerciseDay={exerciseDay}/>);
            });
        }
        return (
            <div className="ExerciseDay">
                <div style={{textAlign: "center", fontFamily: "Spectral SC", fontSize: 60}}>Sheiko #{this.numeric}</div>
                <ProgressionChart data={this.sheikoData}/>
                {exerciseRoutines}
            </div>
        );
    }
}