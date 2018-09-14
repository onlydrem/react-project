 /* jshint esversion: 6 */
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore,applyMiddleware} from "redux"; //applyMiddleware是中间件
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import App from './components/Main';
import Routes from './components/routers';


const store=createStore(   //store仓库放在入口文件
    rootReducer,      //第一个参数，把reducer传进来
    composeWithDevTools(
        applyMiddleware(thunk,Logger)
    )
);    


ReactDOM.render(
    <Provider store={store}>
    <Routes/>
    </Provider>
  
    // <App/>
,document.getElementById('app'))