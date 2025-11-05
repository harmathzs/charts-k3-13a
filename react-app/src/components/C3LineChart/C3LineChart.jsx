import React from "react";
import c3 from 'c3'
import 'c3/c3.css'
export default class C3LineChart extends React.Component {
    state = {
        chartRef: React.createRef(),
        chart: null,
    }

    componentDidMount() {
        // generate line chart from props and state
        this.setState({chart: c3.generate({
            bindto: this.state.chartRef.current,
            type: 'line',
            data: this.props.chartCommonData.data
        })})
    }

    render() {
        return <div>
            <h2>C3 Line chart</h2>
            {/* chart container div */}
            <div ref={this.state.chartRef}>&nbsp;</div>
        </div>
    }
}