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
            data: {
                columns: [
                    [ this.props.chartCommonData.title , 
                        ...this.props.chartCommonData.data.map( ({label, value}) => value )],
                    ['x-labels', 1, 2, 3, 4, 5], // TODO - generate 1,2...dynamically from chartCommonData
                ],
                x: 'x-labels'
            }
        })})
    }

    render() {
        return <div>
            <h2>C3 Line chart</h2>
            {/* chart container div */}
            <div ref={this.state.chartRef}>&nbsp;</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Unemployment rate [%]</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.chartCommonData.data.map( ({label, value})=><tr key={label}>
                            <td>{label}</td>
                            <td>{value}</td>
                        </tr> )}
                    </tbody>
                </table>
            </div>
        </div>
    }
}