import React, { Component, Fragment } from 'react'
import echarts from 'echarts';
import 'echarts/map/js/china';
import {Row, Col} from 'antd';
import geoCoordMap from './geoCoordMap';
import spreadData from './data.json';
import './style.less'

export default class MapChina extends Component {
    componentDidMount() {
        let sDatas = spreadData.RECORDS || [];
        let metroData = sDatas.map(item=>{
            return {
                name: item.city, 
                value: item.num
            }
        });

        //地区与株洲关联
        let relevance  = metroData.map(item=>{
            return {
                "fromName": item.name,
                "toName": "长沙市",
                'coords': [
                    geoCoordMap.getCoord(item.name),
                    [112.945333, 28.233971]
                ],
                lineStyle: {
                    color: '#14CCFA'
                }
            }
        })

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        let option = {
            // backgroundColor: '#154E90',
            title: {
                text: '',
                subtext: '',
                sublink: ''
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b} <br/>{a} : {c}'
            },
            geo: [{
                // show: true,
                map: 'china',
                label: {
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                        },
                    }
                },
                zoom: 1.2,  //缩放比例
                // roam: true,
                itemStyle: {
                    normal: {
                        borderColor: '#5EA8FF',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(0,0,0,.1 )' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(0,0,0, .35)' // 100% 处的颜色
                            }],
                            // globalCoord: true // 缺省为 false
                        },
                        shadowColor: 'rgba(255, 255, 255, .2)',
                        shadowOffsetX: -1,
                        shadowOffsetY: 1,
                        shadowBlur: 5
                    },
                    emphasis: {
                        areaColor: '#73ECFF',
                        borderWidth: 0
                    }
                }
            }],
            series: [{
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: { //涟漪特效相关配置
                    period: '4', //动画的时间
                    scale: '4', //动画中波纹的最大缩放比例
                    brushType: 'stroke'
                },
                itemStyle:{
                    color:'#73ECFF'
                },
                label: { //图形上的城市文本标签
                    normal: {
                        show: false,
                        position: 'right',
                        formatter: '{b}',
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontFamily: 'arial',
                            fontSize: 12,
                        }
                    }
                },
                tooltip: {
                    show: true,
                    formatter: function (params) {
                        //console.log(params)
                        var name = params.name.split("-")[0];
                        if (params.value[2] !== null && params.value[2] !== undefined && params.value[2] !== 'NaN') {

                            return name + "：" + params.value[2];
                        } else {
                            return name;
                        }
                    }
                },
                symbolSize: 4,//点大小

                // data: convertData(cdata),//
                data: convertData(metroData),
            }, {
                name: '线路',
                type: 'lines',
                coordinateSystem: 'geo',
                large: true,
                left: '2%',
                top: 10,
                //线特效的配置
                symbol: 'none',
                zlevel: 2,
                effect: {
                    show: true,
                    symbol: 'roundRect',
                    constantSpeed: 50,
                    period: 2,
                    delay: 100,
                    trailLength: 0.6,
                    symbolSize: 4,
                },
                tooltip:{
                    show:false
                },
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#ed1941'
                            }, {
                                offset: 1,
                                color: '#ffce7b'
                            }],
                            globalCoord: false
                        },
                        width: 0.5,
                        opacity: 0.8,
                        // type: 'dotted',
                        curveness: 0.2,
                    }
                },
                data: relevance //北京与广东省
                // data:relation //广东省各地方
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: { //涟漪特效相关配置
                    period: '4', //动画的时间
                    scale: '2', //动画中波纹的最大缩放比例
                    brushType: 'stroke'
                },
                itemStyle:{
                    color:'#73ECFF'
                },
                label: { //图形上的城市文本标签
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}',
                        textStyle: {
                            color: '#73ECFF',
                            fontStyle: 'normal',
                            fontFamily: 'arial',
                            fontSize: 16,
                        }
                    }
                },
                tooltip: {
                    show: true,
                    formatter: function (params) {
                        //console.log(params)
                        var name = params.name.split("-")[0];
                        if (params.value[2] !== null && params.value[2] !== undefined && params.value[2] !== 'NaN') {
    
                            return name + "：" + params.value[2];
                        } else {
                            return name;
                        }
                    }
                },
                symbolSize: 10,//点大小
                data: [{
                    name:'长沙市',
                    value:[112.945333, 28.233971]
                }]
            }]
        };

        let myCharts = echarts.init(document.getElementById('maps'));
        myCharts.off('click');
        myCharts.clear();
        myCharts.resize();
        myCharts.setOption(option);
    }

    render() {

        return (
            <Fragment>
                <div style={{ width: "100%", height: "100%", position: "relative", zIndex: "10" }}>
                    <Row style={{height: " 100%"}}>
                        <Col span={18} style={{height: " 100%"}}>
                            <div id='maps' style={{ height: '100%' }}></div>
                        </Col>
                        <Col span={6} style={{height: " 100%"}}>
                            <div className="ratio" style={{paddingTop:30}}>
                                <ul>
                                    <li className="man">
                                        <img alt='' src={require('./img/man.png')}/>
                                        <span>8694人</span>
                                    </li>
                                    <li className="woman">
                                        <img alt='' src={require('./img/woman.png')}/>
                                        <span>5558人</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="student_address">
                                <h2><i></i>生源地分布</h2>
                                <ul>
                                    <li><span className='pro'>湖南省:</span> <span>12940</span>人</li>
                                    <li><span className='pro'>广东省:</span> <span>213</span>人</li>
                                    <li><span className='pro'>广西省:</span> <span>208</span>人</li>
                                    <li><span className='pro'>四川省:</span> <span>109</span>人</li>
                                    <li><span className='pro'>江西省:</span> <span>106</span>人</li>
                                    <li><span className='pro'>浙江省:</span> <span>102</span>人</li>
                                    <li><span className='pro'>贵州省:</span> <span>87</span>人</li>
                                    <li><span className='pro'>新疆:</span> <span>85</span>人</li>
                                    <li><span className='pro'>云南省:</span> <span>77</span>人</li>
                                    <li><span className='pro'>河北省:</span> <span>76</span>人</li>
                                    
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Fragment>
        )
    }
}
