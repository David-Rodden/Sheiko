import React, {Component} from 'react';
import Chart from 'react-google-charts';

class ProgressionChart extends Component {
    constructor() {
        super();
        this.randomList = [["Set", "Effort"]];
        for (let i = 0; i < 100; i++) {
            this.randomList.push([i, Math.random() * 10]);
        }
    }

    render() {
        return (
            <div className={'my-pretty-chart-container'}>
                <Chart.Chart
                    chartType="LineChart"
                    data={this.randomList}
                    options={{}}
                    graph_id="LineChart"
                    width="100%"
                    height="400px"
                    legend_toggle
                />
            </div>
        );
    }
}

export default ProgressionChart;