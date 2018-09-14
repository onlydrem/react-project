import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// import Job from './container/Job/jobWanted'
import App from './Main';
import HeadDtail from './header/HeadDtail';
import SigUp from "./header/SigUp";

export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/HeadDtail" component={HeadDtail}/>
                    <Route path="/SigUp" component={SigUp}/>
                 </div> 
            </BrowserRouter >
        )
    }

}

