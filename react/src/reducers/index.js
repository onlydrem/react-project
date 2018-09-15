//把所有的reducer放到一起
 /* jshint esversion: 6 */
import {combineReducers} from 'redux';

import auth from './auth';
import flashMessage from './flashMessage';


//把reducer整合到一起暴露出去，方便引用
export default combineReducers({
    auth,  //把reducer传进来
    flashMessage
})