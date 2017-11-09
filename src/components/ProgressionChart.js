import React, {Component} from 'react';
import Chart from 'react-google-charts';
import $ from 'jquery';

export default class ProgressionChart extends Component {
    constructor(props) {
        super(props);
        this.chartData = [["Global Set", "Effort"]];
        this.exerciseSets = [];
        let globalSet = 0;
        this.props.data.forEach(datapoint => {
            datapoint.routine.forEach(routine => {
                this.exerciseSets.push(routine.tasks.length);
                routine.tasks.forEach(task => {
                    this.chartData.push([globalSet++, task.effort]);
                });
            });
        });
        this.chartEvent = {
            eventName: 'select',
            callback(Chart) {
                const exerciseTasks = $(".ExerciseTask");
                exerciseTasks.css("border", "");
                const chartSelection = Chart.chart.getSelection()[0];
                if (!chartSelection) return;
                const selected = exerciseTasks.eq(chartSelection["row"]);
                $("html, body").animate({
                    scrollTop: selected.offset().top
                }, "slow");
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
                    chartType="LineChart"
                    data={this.chartData}
                    options={{curveType: "function", vAxis: {title: "Effort (% of 1RM)"}, hAxis: {title: "Global Set"}}}
                    graph_id="LineChart"
                    width="100%"
                    height="200px"
                    chartEvents={[this.chartEvent]}
                />
            </div>
        );
    }
}