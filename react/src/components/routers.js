import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './Main';
import HeadDtail from './header/HeadDtail';
import SigUp from './header/SigUp';
import Login from './header/Login';
import NewEvent from './header/NewEvent';
import requiredAuth from './utils/requireAuth';





export default class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/HeadDtail" component={HeadDtail}/>
                    <Route path="/sigup" component={SigUp}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/new-event" component={requiredAuth(NewEvent)}/>
                 </div> 
            </BrowserRouter>
        )
    }

}

