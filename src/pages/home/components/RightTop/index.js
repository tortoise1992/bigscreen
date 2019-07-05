import React, {Component} from 'react';
import './style.less'
import Duidie from './duidie'
class BooksTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoad: true,
            showChartData: {},
            noData: false
        };
    }

    componentDidMount(){
        
       
    }

    


    render() {
        let data = [
            {
                name: '毕业率',
                value: [
                    {
                        name: '2016年',
                        value: 95.90
                    },
                    {
                        name: '2017年',
                        value: 95.49
                    },
                    {
                        name: '2018年',
                        value: 96.15
                    }
                ]
            },
            {
                name: '就业率',
                value: [
                    {
                        name: '2016年',
                        value: 95.70
                    },
                    {
                        name: '2017年',
                        value: 96.30
                    },
                    {
                        name: '2018年',
                        value: 96
                    }
                ]
            }
        ];
        return (
            <div className='bgcolor'  style={{height: '100%'}}>
            <div className="books_total">
                <div style={{padding:'10px 10px 0 10px'}}>
                <h2><i></i>近三年学生毕业/就业率/雇主满意度</h2>
                </div>
                
                <div style={{height: 'calc(100% - 35px)', padding: '10px'}}>
                    <Duidie data={data}></Duidie>
                </div>
            </div>
            </div>
        );
    }
}

export default BooksTotal;

