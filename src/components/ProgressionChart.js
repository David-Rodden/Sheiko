import React, {Component} from 'react';
import Chart from 'react-google-charts';

export default class ProgressionChart extends Component {
    constructor(props) {
        super(props);
        this.chartData = [["Global Set", "Effort"]];
        let globalSet = 0;
        this.props.data.forEach(datapoint => {
            datapoint.routine.forEach(routine => {
                routine.tasks.forEach(task => {
                    for (let i = 0; i < task.sets; i++)
                        this.chartData.push([globalSet++, task.effort]);
                });
            });
        });
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
                />
            </div>
        );
    }
}