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
        let data = this.props.data;
        if (!data || data.length <= 0) {
            return;
        }
        
        let xAxisData = data.map(item => item.name);    
        console.log(xAxisData)
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                top:20,
                left: -20,
                right: 0,
                bottom: 10,
                containLabel: true
            },
            color: ['#F8E71C', '#31DEF5'],
            xAxis: {
                type: 'category',
                data:  data[0] && data[0]['value'] && data[0]['value'].map(item => {
                    return item.name;
                }),
                axisLabel:{
                    color: "#379fb7",
                },
                axisLine:{
                    lineStyle:{
                        color: "rgba(35, 171, 203, 1)",
                        type: "dashed"
                    }
                },
            },
            yAxis: {
                show:false,
                name: '数量',
                type: 'value',
                axisLine:{
                    show:false,
                    lineStyle:{
                        color: "rgba(35, 171, 203, 1)",
                        type: "dashed"
                    }
                },
                axisLabel:{
                    color: "#379fb7",
                },
                splitLine:{
                    // show:false,
                    lineStyle: {
                        color: "rgba(35, 171, 203, 1)",
                        type: "dashed"
                    }
                }
            },
            series: data.map((item,index) => {
                return {
                    name: item.name,
                    type: 'bar',
                    barWidth: 30,
                    stack: index,
                    data: item.value,
                    label: {
                        show: true,
                        position: "top",
                        color: "#fff",
                        fontSize: 14
                    },
                };
            })
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