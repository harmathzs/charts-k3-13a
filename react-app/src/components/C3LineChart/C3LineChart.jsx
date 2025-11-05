import React from "react";
import c3 from 'c3'
import 'c3/c3.css'
export default class C3LineChart extends React.Component {
    state = {
        chartRef: React.createRef(),
        chart: null,
    }

    componentDidMount() {
        const indices = []
        for (let i=1; i<=this.props.chartCommonData.data.length; i++) {
            indices.push(i)
        }
        console.log('indices', indices)

        // generate line chart from props and state
        this.setState({chart: c3.generate({
            bindto: this.state.chartRef.current,
            type: 'line',
            data: {
                columns: [
                    [ this.props.chartCommonData.title , 
                        ...this.props.chartCommonData.data.map( ({label, value}) => value )],
                    ['x-labels', ...indices], // generate 1,2...dynamically from chartCommonData
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
                            <th>#</th>
                            <th>Country</th>
                            <th>Unemployment rate [%]</th>
                        </tr>
                    </thead>

                    <tbody>  
                        {this.props.chartCommonData.data.map( ({label, value}, idx)=><tr key={label}>
                            <td>{1+idx}</td>
                            <td>{label}</td>
                            <td>{value}</td>
                        </tr> )}
                    </tbody>
                </table>
            </div>
        </div>
    }
}