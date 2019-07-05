import React, {Component} from 'react';
import './style.less';
import lineImg from '../commen/img/6.png';

class RightBottom extends Component {
    render() {
        return (
            <div className='bgcolor' style={{height:'100%'}}>
            <div className="teach_info">
                <div style={{padding:'10px 10px 0 10px'}}>
                <h2><i></i>教学工作</h2>
                </div>
                <div style={{height: 'calc(100% - 30px)', padding: '10px'}}>
                    <div className='jiaoxuegongzuo'>
                        <div className='item item-1'>
                            <div className="inner">
                                <h3>教学面积</h3>
                                <p><b style={{fontSize: 20, color: '#d4c938'}}>22144</b>平方米</p>
                                <img alt='' src={lineImg}/>
                                <p style={{color: 'rgba(255, 255, 255, .8)'}}>多媒体教师数<b>210</b>间</p>
                            </div>
                        </div>
                        <div className='item item-2'>
                            <div className="inner">
                                <h3>实训基地数量</h3>
                                <p style={{textAlign: 'left', margin: '5px 0 0'}}>校内<b>78</b>个</p>
                                <p style={{textAlign: 'right', margin: 0}}>校外<b>239</b>个</p>
                                <img alt='' src={lineImg}/>
                                <p style={{color: 'rgba(255, 255, 255, .8)'}}>学生顶岗实习占比<b>97.8%</b></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default RightBottom;

