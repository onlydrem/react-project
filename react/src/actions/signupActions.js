import axios from 'axios';

export const userSignupRequest=(userData)=>{
    return dispatch=>{
        return axios.post('/api/users',userData)
    }
}

export const isUserExist=(identifer)=>{
    return dispatch=>{
        return axios.get(`/api/users/${identifer}`,identifer)
    }
}