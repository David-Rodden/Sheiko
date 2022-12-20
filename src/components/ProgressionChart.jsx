import React from 'react';
import Component from "react";
import Chart from 'react-google-charts';
import $ from 'jquery';

export default class ProgressionChart extends React.Component {
    constructor(props) {
        super(props);
        this.chartData = [["Global Set", "Bench", "Squat", "Deadlift"]];
        let globalSet = 0;
        this.props.data.forEach(datapoint => {
            datapoint.routine.forEach(routine => {
                const exerciseName = routine.exercise;
                routine.tasks.forEach(task => {
                    const effort = task.effort;
                    this.chartData.push([globalSet += task.sets, exerciseName.includes("Bench") ? effort : 0, exerciseName.includes("Squat") ? effort : 0, exerciseName.includes("Deadlift") ? effort : 0]);
                });
            });
        });
        this.chartEvent = {
            eventName: 'select',
            callback(Chart) {
                const exerciseTasks = $(".ExerciseTask");
                exerciseTasks.css("border", "");
                const chartSelection = Chart.chart.getSelection()[0];
                if (!chartSelection || !chartSelection["row"]) return;
                const selected = exerciseTasks.eq(chartSelection["row"]);
                $("html, body").animate({scrollTop: selected.offset().top}, "slow");
                selected.css({
                    "border": "2px solid blue",
                    "border-radius": "5px"
                });
            }
        };
    }

    render() {
        return (
            <div className={'my-pretty-chart-container'}>
                <Chart.Chart
                    chartType="SteppedAreaChart"
                    data={this.chartData}
                    options={{
                        title: "Big Lifts Overview",
                        curveType: "function", vAxis: {title: "Effort (% of 1RM)"},
                        hAxis: {
                            title: "Global Set"
                        },
                        explorer: {
                            axis: "horizontal", actions: ['dragToZoom', 'rightClickToReset'], keepInBounds: true,
                            maxZoomIn: 4.0
                        },
                        colors: ['#ce0c56', '#e09d00', '#1cba63'],
                        series: {
                            0: {lineDashStyle: [10, 2]},
                            1: {lineDashStyle: [10, 2]},
                            2: {lineDashStyle: [10, 2]}
                        },
                    }}
                    graph_id="BigLiftChart"
                    width="100%"
                    height="200px"
                    chartEvents={[this.chartEvent]}
                />
            </div>
        );
    }
}