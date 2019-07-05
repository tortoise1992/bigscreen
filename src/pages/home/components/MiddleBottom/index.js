import React, {Component} from 'react';
import './style.less'
import {Row} from 'antd'
import Items from './item'
class MiddleBottom extends Component {
    
    render() {
        let data=[
            {
                data: [
                    {
                        name: '教师党员人数',
                        value: 505
                    },
                    {
                        name: '其他',
                        value: 194
                    }           
                ],
                title:'教师党员人数',
                num:505,
                ratio:72.2
            },
            {
                data: [
                    
                    {
                        name: '教师党员发展人数',
                        value: 2
                    }  ,
                    {
                        name: '教师党员人数',
                        value: 505
                    },         
                ],
                title:'教师党员发展人数',
                num:2,
                ratio:0.29
            },
            {
                data: [
                    
                    
                    {
                        name: '学生党员人数',
                        value: 346
                    },  
                    {
                        name: '其他',
                        value: 13691
                    }  ,       
                ],
                title:'学生党员人数',
                num:346,
                ratio:2.5
            },
            {
                data: [
                    
                    {
                        name: '学生党员发展人数',
                        value: 262
                    }  ,
                    {
                        name: '学生党员人数',
                        value: 346
                    },         
                ],
                title:'学生党员发展人数',
                num:262,
                ratio:43
            }
        ]
        return (
            <div className='bgcolor' style={{height:'100%'}}>
            <div className="teacher_student_ratio">
                <div style={{padding:10}}>
                    <h2>党建工作</h2>
                </div>                
                <div style={{height: 'calc(100% - 30px)'}}>
                   <Row style={{height: 'calc(100% - 30px)'}}>
                       {
                           data.map((item,index)=> <Items {...item} key={index} index={index}></Items>)
                       }
                   </Row>
                </div>
            </div>
            </div>
        );
    }
}

export default MiddleBottom;

