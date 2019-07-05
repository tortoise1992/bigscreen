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
        let tmp = this.props.data.RECORDS;
        if (!tmp || tmp.length <= 0) {
            return;
        }
        let data=[]
        for(let key in tmp[0]){
            data.push({
                name:key,
                value:tmp[0][key]
            })
        }
        let xAxisData = data.map(item => item.name);
        var color = this.props.color || 0;

        var colors0 = ['#50E3C2', '#A0D911', '#FADB14', '#FA8C16'];
        var colors1 = ['#FA8C16', '#FA541C', '#c43707', '#dd1607'];

        var option = {
            title:{
                text:this.props.text || '',
                textStyle:{
                    color:'#00CFFF',
                    fontSize:12
                },
                left:20
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} "
            },
            grid: {
                left: 20,
                top: 30,
                bottom: 10,
                right: 20,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: xAxisData,
                axisLine: {
                    lineStyle: {
                        color: "#00CFFF",
                        type: "dashed"
                    }
                },
                axisLabel: {
                    color: "#00CFFF",
                    interval: 0
                },
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: '',
                    type: 'bar',
                    barMaxWidth: '20px',
                    itemStyle:{
                        normal: {
                            color: function(params) {
                                if(color === 0){
                                    return colors0[params.dataIndex];
                                }else {
                                    return colors1[params.dataIndex];
                                }
                            }
                        }
                    },
                    label: {
                        show: true,
                        position: "top",
                        color: "#fff",
                        fontSize: 14
                    },
                    data: data
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