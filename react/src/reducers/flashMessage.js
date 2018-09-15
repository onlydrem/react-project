//存放flash信息
import {ADD_FLASH_MESSAGE,DELETE_FLASH_MESSAGE} from "../constans";
import shortid from "shortid";
import findIndex from "lodash/findIndex"
const flashMessage=(state=[],action={})=>{
    switch(action.type){
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id:shortid.generate(),
                    type:action.message.type,
                    text:action.text
                }
            ]
        case DELETE_FLASH_MESSAGE:
            const index=findIndex(state,{id:action.id});  //找出一个元素的索引  找不到的话返回-1
            if(index>=0){
                return [
                    ...state.slice(0,index),  //剔除掉上面找到的元素
                    ...state.slice(index+1)
                ]
            }
            return state
        default:return state
    }
}

export default flashMessage;