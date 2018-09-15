import React,{Component} from 'react';
// import {connect} from "react-redux";
import PropTypes from 'prop-types';
import classnames from 'classnames';


class FlashMessage extends Component{
    static propTypes={
        message:PropTypes.object.isRequired,
        // 从父级传递过来的，所以父级需要这个方法
        deleteFlashMessage:PropTypes.func.isRequired
    }
    onClick=()=>{
        this.props.deleteFlashMessage(this.props.message.id);  
    }
    render(){
        const {type,text}=this.props.message
        return(
            <div className={classnames('alert',{
                'alert-success':type==='success',
                'alert-danger':type==='danger'
            })}>
            {/*&times;    在这里是x号*/}
            <button onClick={this.onClick} className="close"><span>&times;</span></button>
                {text}
            </div>
        )
    }
}

export default FlashMessage;