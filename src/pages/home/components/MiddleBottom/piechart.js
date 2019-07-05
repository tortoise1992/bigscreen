import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import echarts from 'echarts';


class Barchart extends Component {
    state = {
        myChart:null,
        chartId:`FloorSpace${new Date().getTime()}-${Math.random()}`
    };

    componentDidMount() {
        let chartId=this.state.chartId
        let chart = echarts.init(document.getElementById(chartId));  
        this.setState({
            myChart:chart
        },()=>{
            this.setChart()
        })      
        
    }

    setChart = () => {
        let tmp = this.props.data;
        if (!tmp || tmp.length <= 0) {
            return;
        }
         
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },          
            
            series: [
                {
                    name:'',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                       
                    },
                    color:['#50E3C2', '#A0D911', '#FADB14', '#FA8C16'],  
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:tmp
                }
            ]
        };

        this.state.myChart.setOption(option);
    };

    render() {

        return (
            <div id={this.state.chartId} style={{width: '100%', height: '100%'}}></div>
        );
    }
}

export default withRouter(Barchart);