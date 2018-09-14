import React from 'react';


require('styles/Reset.css');
require('styles/Footer.css');
export default class FootNav extends React.Component {
    render() {
        return (
            <div className="FootNav">
                <ul className="nav">
                    <li onClick={() => this.props.onHandleClick('job')}>招聘</li>
                    <li onClick={() => this.props.onHandleClick('daily')}>日常</li>
                    <li onClick={() => this.props.onHandleClick('indexShow')}>首页</li>
                    <li onClick={() => this.props.onHandleClick('rend')}>租房</li>
                    <li onClick={() => this.props.onHandleClick('second')}>二手</li>
                    <li onClick={() => this.props.onHandleClick('commition')}>社交</li>
                </ul>

            </div>
        );
    }
}