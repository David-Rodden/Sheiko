import React, {Component} from 'react';
import ExerciseTask from "./ExerciseTask";
import benchpress from '../img/benchpress.png';
import squat from '../img/squat.png';
import flies from '../img/flies.png';
import abs from '../img/abs.png';
import pushup from '../img/pushup.png';
import other from '../img/other.png';

import {Chart} from "react-google-charts";

class ExerciseType extends Component {

    constructor(props) {
        super(props);

        function getGraphData() {
            let graphData = [["Iteration", "Effort"]], index = 1;
            props.routine.forEach(ex => {
                const currentTask = ex.props.task;
                graphData.push([index++, currentTask["effort"]]);
            });
            return graphData;
        }

        this.state = {
            options: {
                hAxis: {title: "Iteration", minValue: 0, maxValue: 6},
                vAxis: {title: "Effort", minValue: 0, maxValue: 1}
            },
            data: [
                ['Age', 'Weight'],
                [8, 12],
                [4, 5.5],
                [11, 14],
                [4, 5],
                [3, 3.5],
                [6.5, 7],
            ]
        };
    }

    render() {
        let exerciseType;
        if (this.props.routine.tasks) {
            let taskKey = 0;
            exerciseType = this.props.routine.tasks.map(task => {
                return <ExerciseTask key={taskKey++} task={task}/>
            });
        }
        const style = {
            textAlign: "center",
            marginLeft: "20%",
            marginRight: "40%",
            border: "2px solid grey",
            borderRadius: "15px",
            marginBottom: "2%"
        };

        function determineImage(exercise) {
            return exercise.includes("bench") ? benchpress : exercise.includes("squat") ? squat : exercise.includes("flies") ? flies : exercise.includes("abs") ? abs : exercise.includes("push up") ? pushup : other;
        }

        return (<div className="ExerciseType" style={style}>
            <h3 style={{
                fontFamily: "Arima Madurai, cursive",
                fontSize: 23
            }}>{this.props.routine.exercise.charAt(0).toUpperCase() + this.props.routine.exercise.slice(1)}</h3>
            <div style={{float: "left"}}>
                {exerciseType}
            </div>
            <img id="exercise-picture" src={determineImage(this.props.routine.exercise)} alt=""
                 data-tip={this.props.routine.exercise}/>
            {/*<Chart*/}
                {/*chartType="ScatterChart"*/}
                {/*data={this.state.data}*/}
                {/*options={this.state.options}*/}
                {/*graph_id="ExerciseChart"*/}
                {/*width="100%"*/}
                {/*height="400px"*/}
            {/*/>*/}
        </div>);
    }
}

export default ExerciseType;