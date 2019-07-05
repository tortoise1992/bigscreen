import React, { Component } from 'react'
import {Col} from 'antd'
import PieChart from './piechart'
export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoad: true,
            showChartData: {},
            noData: false
        };
    }    
    render() {
        return (
            <Col span={6} style={{height: 'calc(100% - 30px)'}}>
                           <div style={{float:'left',width:'40%',height:'100%'}}>
                               <PieChart data={this.props.data}></PieChart>
                           </div>
                           <div style={{height: '100%',flexDirection:'col',justifyContent:'center',alignItems:'center',float:'left',width:'60%',textAlign:'center',display:'flex'}}>
                                <div>
                                <div style={{color:'#A5CDFD',fontSize:12}}>{this.props.title}</div>
                                <div style={{color:'#E8F3FF',fontSize:18}}>{this.props.num}人</div>
                                </div>
                                
                           </div>
                        </Col>
        )
    }
}
