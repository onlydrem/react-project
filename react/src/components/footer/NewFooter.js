require('styles/Reset.css');
require('styles/Footer.css');

import React from 'react';
import Daily from '../container/Daily/Daily'
import Job from '../container/Job/jobWanted'


export default class NewFootNav extends React.Component {
    constructor(props){
        super(props);
        this.state={
            tabs:[
                {tabName:'招聘',id:1},
                {tabName:'日常',id:1},
                {tabName:'首页',id:1},
                {tabName:'二手',id:1},
                {tabName:'租房',id:1},
                {tabName:'社交',id:1}
            ],
            currentIndex:1,
        };
    }
    componentDidMount(){

    }
    tabCoiced=(id)=>{
        this.setState({
            currentIndex:id
        });
    }

    render() {
        var _this=this;
        var isBox1Sow=this.state.currentIndex==1 ? 'block' : 'none';
        var isBox2Sow=this.state.currentIndex==2 ? 'block' : 'none';
        var isBox3Sow=this.state.currentIndex==3 ? 'block' : 'none';

            var tabList=this.state.tabs.map((res,index)=>{
                var tabStyle=res.id==this.state.currentIndex?'subCtrl active':'subCrol'
                
                return <li key={index} onclick={this.tabCoiced.bind(_this,res,id)} className={tabStyle}>{res.tabName}</li>
            
            }).bind(_this);
        return (
            <div className="FootNav">
                <ul>
                    {tabList}
                </ul>
                <ul className="nav">
                    <li><Job /></li>
                    <li><Daily /></li>
                    <li>首页</li>
                    <li>租房</li>
                    <li>二手</li>
                    <li>社交</li>
                </ul>

            </div>
        );
    }
}