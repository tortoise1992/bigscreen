import React, {Component} from 'react';
import './style.less'
import BarChart from './barchart'
class RightMiddle extends Component {
    

    

    

    render() {
        let data={"RECORDS": [{
            "湖南": 3138,
             "广东": 649,
              "浙江":161,
              "福建": 64,
              "江苏": 48,
              "上海": 39,
              "湖北": 31,
              "安徽": 30,
              "重庆": 29,
              "北京": 28,
            }]}
        return (
            <div className='bgcolor'  style={{height: '100%'}}>
            <div className="books_total">                
                <div  style={{padding:'10px 10px 0 10px'}}>
                <h2><i></i>热门就业地区分布</h2>
                </div>
                
                <div style={{height: 'calc(100% - 30px)', padding: '10px'}}>
                    <BarChart data={data}></BarChart>
                </div>
            </div>
            </div>
        );
    }
}

export default RightMiddle;

