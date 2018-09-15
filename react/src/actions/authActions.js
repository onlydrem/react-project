import  axios from 'axios';  //这个组件会重复利用
import setAuthorizationToken from '../components/utils/setAuthorizationToken'
import jwtDecode from 'jwt-decode';
import {SET_CURRENT_USER} from '../constans'

export const setCurrentUser=(user)=>{
    return{
        type:SET_CURRENT_USER,
        user
    }
}
export const logout=()=>{
    return dispatch=>{
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}))
    }
}
export const login =(data)=>{
    return dispatch=>{
        return axios.post('./api/auth',data).then(res=>{
            const token=res.data.token;

            localStorage.setItem('jwtToken',token);
            setAuthorizationToken(token);
            //解析token   //下载jwt-decode
            // console.log(jwtDecode(token))   //怎么利用解析
            dispatch(setCurrentUser(jwtDecode(token)))

        })
    }
};


//加载的时候执行