import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import './index.less'

import LeftTop from './components/LeftTop'
import LeftMiddle from './components/LeftMiddle'
import MiddleTop from './components/MiddleTop'
import MiddleBottom from './components/MiddleBottom'
import RightBottom from './components/RightBottom'
import RightTop from './components/RightTop'
import LeftBottom from './components/LeftBottom'
import RightMiddle from './components/RightMiddle'

class FullHomeComponent extends Component{    
    skip=()=>{
        // this.props.history.push('/page2');
    }
    
    render(){
        return(
            <div className="container" onClick={this.skip}>
                {/* <div className="header_title">
                    <div className='name'>
                        <img src={require('./components/commen/img/biglogo.png')} style={{width:'100%'}}/>
                        </div>
                    <img className='header-bg' src={require('./components/commen/img/Rectangle.png')} height={70}/>
                </div> */}
                <div className="content">                   
                    <div className='slide-25-l'>
                        <div className="slide-inner">
                            <div className='block-33' style={{paddingTop:'15px'}}>
                                <LeftTop></LeftTop>
                            </div>

                            <div  className='block-33'>
                                <LeftMiddle></LeftMiddle>
                            </div>

                            <div  className='block-33' style={{paddingBottom:'15px'}}>
                                <LeftBottom></LeftBottom>
                                
                            </div>
                        </div>
                    </div>
                    <div  className='slide-50'>
                        <div className="slide-inner">
                            <div className='block-75' style={{padding: '70px 0 0 0'}}>
                                <MiddleTop></MiddleTop>
                            </div>

                            <div className='block-25' style={{paddingBottom:'15px'}}>                               
                                <MiddleBottom></MiddleBottom>                                
                            </div>
                        </div>
                    </div>
                    <div  className='slide-25-r'>
                        <div className="slide-inner">
                            <div className='block-33' style={{paddingTop:'15px'}}>
                                
                                <RightTop></RightTop>
                                
                            </div>
                            <div  className='block-33'>
                                <RightMiddle></RightMiddle>
                            </div>
                            <div className='block-33' style={{paddingBottom:'15px'}}>
                                
                                <RightBottom></RightBottom>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default withRouter(FullHomeComponent);