import {SET_CURRENT_USER} from '../constans';
import isEmpty from 'lodash/isEmpty';

const initialState={
    isAuthenticated:false,   //判断有没有登录
    user:{}   //取出页面的数据
}
const auth=(state=initialState,action={})=>{
    switch(action){
        case SET_CURRENT_USER:
            return{
                isAuthenticated:!isEmpty(action.user),
                user:action.user  //标志是不是已登录状态
            }
        default:return state;
    }
}

export default auth;