import React, { Component, Fragment } from 'react'
import echarts from 'echarts';
import 'echarts/map/js/china';
import geoCoordMap from '../../../../utils/geoCoordMap';
import spreadData from '../../../../data/汽车大屏-全校人数分布.json';

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
                },
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
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(147, 235, 248, .1)' // 100% 处的颜色
                            }],
                            // globalCoord: true // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
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
                    color:'rgba(255,245,102, 0.8)'
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
                    scale: '4', //动画中波纹的最大缩放比例
                    brushType: 'stroke'
                },
                itemStyle:{
                    color:'#FF0000'
                },
                label: { //图形上的城市文本标签
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}',
                        textStyle: {
                            color: '#f8e71c',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontFamily: 'arial',
                            fontSize: 20,
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
                    <div id='maps' style={{ height: '100%' }}>

                    </div>
                </div>

            </Fragment>
        )
    }
}
