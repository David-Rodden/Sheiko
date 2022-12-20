import React from 'react';
import Component from "react";
import ExerciseItem from './ExerciseRoutine';
import ProgressionChart from "./ProgressionChart";
import surveyHelp from '../img/chart-help.png';
import surveyHelpText from '../questionnaire/chart-help.json';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class ExerciseDay extends React.Component {
    constructor() {
        super();
        this.state = {help: false, visibility: true};
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
                <div style={{textAlign: "center", fontFamily: "Spectral SC", fontSize: 60}}>
                    Sheiko {!this.numeric.includes('-') ? '#' : null}{this.numeric}</div>
                <ProgressionChart data={this.sheikoData}/>
                <div className="Survey-help" style={{marginLeft: "5%"}}>
                    <img id="help-button" src={surveyHelp} alt=""
                         style={{width: "2%", float: "left", borderRadius: "5px", background: "lightgreen"}}
                         onClick={() => {
                             this.setState({help: !this.state.help})
                         }}/>
                    <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={300}
                                             transitionLeaveTimeout={500}>
                        <p style={{
                            marginLeft: "5%",
                            fontFamily: "Itim, cursive",
                            fontSize: 22
                        }}>{this.state.help ? surveyHelpText.text : null}</p>
                    </ReactCSSTransitionGroup>
                </div>
                {exerciseRoutines}
            </div>
        );
    }
}