 /* jshint esversion: 6 */
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore,applyMiddleware} from 'redux'; //applyMiddleware是中间件
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import App from './components/Main';
import Routes from './components/routers';
import FlashMessagesList from './components/flash/FlashMessagesList'
import setAuthorizationToken from './components/utils/setAuthorizationToken'
import setCurrentUser from './actions/authActions';
import jwtDecode from 'jwt-decode'



const store=createStore(   //store仓库放在入口文件
    rootReducer,      //第一个参数，把reducer传进来
    composeWithDevTools(
        applyMiddleware(thunk,Logger)
    )
);

if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
    <Provider store={store}>
    <FlashMessagesList/>
    <Routes/>
    </Provider>
  
    // <App/>
,document.getElementById('app'))