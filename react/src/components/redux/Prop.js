//import React from 'react';

// this.props属性

import React,{Component} from 'react'
import PropsChildren from './PropsChild.js'

 export default class Props extends Component{

    getDefaultProps(){
        return{
            data:'默认'
        }
    }
    // propTypes:{
    //     //年龄必须为数字 
    //     age: React.PropTypes.number,
    //   },

    handleClick(){
        {this.props.data3('我是测试方法：')}
    }
    render(){
        return(
            <div>
              {/*  从父组件获取data的值 */}
               {/* {this.props.data}
                <br/>
                {this.props.data2} */}

                名字:{this.props.data.name}
                <br/>

                地址:{this.props.data.address}
                <br/>
                年龄:{this.props.age}
                <br/>

                身高:{this.props.data.height}
                <br/>
               
                {this.props.data2}
                <button oncclick={this.handleClick}>测试方法</button>

                {/* 新添加部分 */}
                <PropsChildren>
                   <p>我是p标签</p>
                   <h4>我是h4标签</h4>
                   <button>我是一个button</button>
                   <label>我是一个label</label>
                   <text>我是一个文本组件</text>
                </PropsChildren>

            </div>
        )
    }
}
