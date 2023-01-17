import React from 'react';
// import {Chart} from 'react-google-charts';
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, ToolTip, Legend} from "chart.js"
import {Bar} from "react-chartjs-2"
import $ from 'jquery';

export default class ProgressionChart extends React.Component {
    constructor(props) {
        super(props);
        // ChartJS.register(BarElement, CategoryScale, LinearScale, ToolTip, Legend);
        this.chartData = [["Global Set", "Bench", "Squat", "Deadlift"]];
        let globalSet = 0;
        // this.props.data.forEach(datapoint => {
        //     datapoint.routine.forEach(routine => {
        //         const exerciseName = routine.exercise;
        //         routine.tasks.forEach(task => {
        //             const effort = task.effort;
        //             this.chartData.push([globalSet += task.sets, exerciseName.includes("Bench") ? effort : 0, exerciseName.includes("Squat") ? effort : 0, exerciseName.includes("Deadlift") ? effort : 0]);
        //         });
        //     });
        // });
        // this.chartEvent = {
        //     eventName: 'select',
        //     callback(Chart) {
        //         const exerciseTasks = $(".ExerciseTask");
        //         exerciseTasks.css("border", "");
        //         const chartSelection = Chart.chart.getSelection()[0];
        //         if (!chartSelection || !chartSelection["row"]) return;
        //         const selected = exerciseTasks.eq(chartSelection["row"]);
        //         $("html, body").animate({scrollTop: selected.offset().top}, "slow");
        //         selected.css({
        //             "border": "2px solid blue",
        //             "border-radius": "5px"
        //         });
        //     }
        // };
        this.myData = {
            labels: ["Mon", "Tue", "Wed"],
            datasets:[
                {
                    label: "369",
                    data: [3, 6, 9],
                    backgroundColor: "aqua",
                    borderColor: "black",
                    borderWidth: 1
                },
                {
                    label: "333",
                    data: [3,3, 3],
                    backgroundColor: "green",
                    borderColor: "black",
                    borderWidth: 1
                }
            ]
        }
        this.options = {}

    }

    render() {
        return (
            <div className={'my-pretty-chart-container'}>
                {/*<Bar*/}
                {/*    data={this.myData}*/}
                {/*    options={this.options}*/}
                {/*/>*/}

                {/*<Chart.Chart*/}
                {/*    chartType="SteppedAreaChart"*/}
                {/*    data={this.chartData}*/}
                {/*    options={{*/}
                {/*        title: "Big Lifts Overview",*/}
                {/*        curveType: "function", vAxis: {title: "Effort (% of 1RM)"},*/}
                {/*        hAxis: {*/}
                {/*            title: "Global Set"*/}
                {/*        },*/}
                {/*        explorer: {*/}
                {/*            axis: "horizontal", actions: ['dragToZoom', 'rightClickToReset'], keepInBounds: true,*/}
                {/*            maxZoomIn: 4.0*/}
                {/*        },*/}
                {/*        colors: ['#ce0c56', '#e09d00', '#1cba63'],*/}
                {/*        series: {*/}
                {/*            0: {lineDashStyle: [10, 2]},*/}
                {/*            1: {lineDashStyle: [10, 2]},*/}
                {/*            2: {lineDashStyle: [10, 2]}*/}
                {/*        },*/}
                {/*    }}*/}
                {/*    graph_id="BigLiftChart"*/}
                {/*    width="100%"*/}
                {/*    height="200px"*/}
                {/*    chartEvents={[this.chartEvent]}*/}
                {/*/>*/}
            </div>
        );
    }
}