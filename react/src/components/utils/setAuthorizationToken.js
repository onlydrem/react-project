import axios from 'axios';

//设置默认的axios的参数

const setAuthorizationToken=(token)=>{
    if(token){
        axios.defaults.headers.common['Authorization']=`bearer ${token}`;
    }else{
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthorizationToken;