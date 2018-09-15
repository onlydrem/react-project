import React from 'react';
import { Link } from 'react-router-dom'

require('styles/public.css');
require('styles/Header.css');



export default class HeadNav extends React.Component {
    render() {
        return (
            <div className="HeadNav .clearfix">
                <div className="Search">
                    <input className="Sousuo" type="text" placeholder="请在这里搜索你想要的...." name="搜索" />
                </div>
                <div className="SearchBtn"> <button type="submit" className="Submit"></button></div>
                <div className="SignIn"><Link to="HeadDtail"><img src={require('../../images/img/account.png')} /></Link></div>
            </div>
        );
    }
}