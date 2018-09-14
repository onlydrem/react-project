require('styles/Reset.css');
require('styles/Footer.css');

import React from 'react';

export default class FootNav extends React.Component {
    render() {
        return (
            <div className="FootNav">
                <ul className="nav">
                    <li onClick={() => this.props.onHandleClick('job')}>招聘</li>
                    <li onClick={() => this.props.onHandleClick('daily')}>日常</li>
                    <li>首页</li>
                    <li>租房</li>
                    <li>二手</li>
                    <li>社交</li>
                </ul>

            </div>
        );
    }
}