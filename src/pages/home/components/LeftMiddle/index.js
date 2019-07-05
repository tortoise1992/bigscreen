import React, {Component} from 'react';
import echarts from 'echarts';
import './style.less'
let myChart;
let myChart2;
let jsonData={
    "RECORDS": [
        {
            "vocationName": "正高",
            "number": "41"
        },
        {
            "vocationName": "副高",
            "number": "121"
        },
        {
            "vocationName": "中级",
            "number": "331"
        },
        {
            "vocationName": "初级",
            "number": "56"
        }
    ]
},jsonData2={
    "RECORDS": [
        {
            "education": "专任双师数",
            "number": "377"
        }
    ]
}
class TeacherInfo extends Component {
    state = {
        chartData: [],
        chartData2: [],
    }
    componentDidMount(){
        myChart = echarts.init(document.getElementById('TeacherTitleEducationSpreadChart'));
        myChart2 = echarts.init(document.getElementById('TeacherTitleEducationSpreadChart2'));
        let chartData = jsonData.RECORDS;
        let chartData2 = jsonData2.RECORDS;
        this.setState({chartData,chartData2},()=>{
            this.setChart();
        });
        
    }
    
    setChart = () => {
        let data = this.state.chartData;
        let data2 = this.state.chartData2;
        if(!data || data.length<=0 || !data2 || data2.length<=0){
            return;
        }
        let legendData = [], seriesData = [];
        let legendData2 = [], seriesData2 = [];

        data.forEach(item=>{
            legendData.push(item.vocationName+`  ${item.number}`);
            seriesData.push({
                name: item.vocationName+`  ${item.number}`, value: item.number
            });
        })

        data2.forEach(item=>{
            legendData2.push(item.education+`  ${item.number}`);
            seriesData2.push({
                name: item.education+`  ${item.number}`, value: item.number
            });
        });

        const legendStyle = {
            icon: 'circle',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 5,
            left: '63%',
            textStyle: {
                fontSize: 12,
                color: '#a5cdfd'
            },
        }

        let option =  {
            // tooltip: {
            //     trigger: 'item',
            //     formatter: "{a} <br/>{b}: {c} ({d}%)"
            // },
            color: ["#33E8FF","#04FFC7","#FFBF55","#FA8C16"],
            legend: {
                ...legendStyle,
                orient: 'vertical',
                top: '20%',
                data:legendData
            },
            series: [
                {
                    name:'',
                    type:'pie',
                    radius: ['0%', '40%'],
                    center: ['35%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:seriesData
                }
            ]
        };
        
        let option2 =  {
            // tooltip: {
            //     trigger: 'item',
            //     formatter: "{a} <br/>{b}: {c} ({d}%)"
            // },
            color: ["#00B4FF","#2D66A1","#98F739","#D5F523"],
            legend: {
                ...legendStyle,
                orient: 'vertical',
                bottom: '20%',
                data:legendData2,
            },
            series: [
                {
                    name:'',
                    type:'pie',
                    radius: ['55%', '70%'],
                    center: ['35%', '50%'],
                    label: {
                        show: false,
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:seriesData2
                }
            ]
        };
        
        myChart2.setOption(option);
        myChart.setOption(option2);
    }
    render() {
        return (
            <div className='bgcolor'  style={{height: '100%'}}>
                <div className="teacher_info">
                    <div style={{padding:'10px 10px 0 10px'}}>
                    <h2><i></i>教师结构</h2>
                    </div>
                    <div style={{height: 'calc(100% - 30px)',position:'relative'}}>
                        <div id="TeacherTitleEducationSpreadChart" style={{height:'100%',width: "100%"}}></div>
                        <div id="TeacherTitleEducationSpreadChart2" style={{
                            position: "absolute",
                            left: 0, top: 0,
                            width: "100%", height:'100%'
                        }}></div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default TeacherInfo;

