import React, {Component} from 'react';
import './style.less';

class LeftBottom extends Component {
    render() {
        return (
            <div className='bgcolor' style={{height:'100%'}}>                

            <div className="teach_info">
                <div  style={{padding:'10px 10px 0 10px'}}>
                <h2><i></i>校企合作</h2>
                </div>
                <div style={{height: 'calc(100% - 30px)', padding: '10px'}}>
                    <div className='xiaoqi'>
                        <div className='item-1'>
                            <div style={{textAlign:'center',color:'#fff',marginTop:2,fontSize:14}}>
                                合作企业数量
                            </div>
                            <div style={{textAlign:'center',margin:'4% 0'}}>
                                <span style={{color:'#FADB14',fontSize:26}}>803</span>
                                <span style={{color:'#A5CDFD'}}>个</span>
                            </div>
                            <div className='ratio'>
                                <span className='sub'>同比上年</span>
                                <span className='three red-three'></span>
                                <span className='red-text'>+6.8%</span>
                            </div>
                        </div>
                        <div className='item-2'>
                            <div className='ratio' style={{marginTop:'14%'}}>
                                <span className='sub'>同比上年</span>
                                <span className='three red-three'></span>
                                <span className='red-text'>+13.5%</span>
                            </div>
                            <div style={{textAlign:'center',margin:'4% 0'}}>
                                <span style={{color:'#FADB14',fontSize:20}}>37</span>
                                <span style={{color:'#A5CDFD'}}>门</span>
                            </div>
                            <div style={{textAlign:'center',color:'#fff',fontSize:14}}>
                                联合开发课程数量
                            </div>
                        </div>
                        <div className='item-3' style={{position:'relative'}}>           
                            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%'}}>
                                <div style={{textAlign:'center',color:'#fff',fontSize:14}}>
                                (准)捐赠设备总值
                                </div>                 
                                <div style={{textAlign:'center'}}>
                                    <span style={{color:'#FADB14',fontSize:18}}>2529.21</span>
                                    <span style={{color:'#A5CDFD'}}>万元</span>
                                </div>
                                <div className='ratio' >
                                    <span className='sub'>同比上年</span>
                                    <span className='three red-three'></span>
                                    <span className='red-text'>+5.7%</span>
                                </div>
                            </div>
                        </div>
                        <div className='item-4'>
                            <div style={{textAlign:'center',color:'#fff',marginTop:'4%',fontSize:14}}>
                           联合开发教材数量
                            </div>
                            <div style={{textAlign:'center',margin:'4% 0'}}>
                                <span style={{color:'#FADB14',fontSize:20}}>34</span>
                                <span style={{color:'#A5CDFD'}}>个</span>
                            </div>
                            <div className='ratio'>
                                <span className='sub'>同比上年</span>
                                <span className='three red-three'></span>
                                <span className='red-text'>+11.7%</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default LeftBottom;

