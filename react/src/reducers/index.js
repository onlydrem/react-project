//把所有的reducer放到一起
 /* jshint esversion: 6 */
import {combineReducers} from "redux";

import auth from "./auth";

export default combineReducers({
    auth   //把reducer传进来
})