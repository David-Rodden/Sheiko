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
                $("html, body").animate({
                    scrollTop: $(".ExerciseTask").eq(Chart.chart.getSelection()[0]["row"]).offset().top
                }, "slow");
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