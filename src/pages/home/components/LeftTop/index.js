import React, {Component} from 'react';
import './style.less';

class CollegeInfo extends Component {
    render() {
        return (
            <div className='bgcolor'  style={{height: '100%'}}>
                <div className="college_info">                
                    <div style={{height: '100%', padding: '20px',position:'relative'}}>
                        <div className='bgs'></div>
                        <div className='xxgk'>
                            <div>
                                <div className='jiaoxue'>
                                    <span className='name'>占地面积：</span><span  className='num'
                                        style={{color:'rgba(3, 255, 255, 1)',fontSize:30}}
                                    >1031亩</span>
                                </div>
                                <div className='jiaoxue'>
                                    <span className='name'>建筑面积：</span><span className='num'>36.8万平方米</span>
                                </div>                           
                                <div className='jiaoxue'>
                                    <span className='name'>开设专业数：</span><span className='num'>42个</span>
                                </div>
                                <div className='jiaoxue'>
                                    <span className='name'>图书总量：</span><span className='num'>85万册</span>
                                </div>
                                <div className='jiaoxue'>
                                    <span className='name'>教学科研仪器值：</span><span className='num'>1.85亿</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default CollegeInfo;

