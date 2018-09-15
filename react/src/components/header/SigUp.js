import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {userSignupRequest,isUserExist} from '../../actions/signupActions';
import {addaddFlashMessage} from '../../actions/flashMessage'

import SigUpForm from './SigUpForm';

 class SigUp extends Component{
     static propTypes={
        userSignupRequest:PropTypes.func.isRequired,
        addaddFlashMessage:PropTypes.func.isRequired,
        isUserExist:this.propTypes.func.isRequired
     }
    render(){
        const {userSignupRequest,addaddFlashMessage,isUserExist}=this.props
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SigUpForm history={this.props.history} isUserExist={isUserExist} addaddFlashMessage={addaddFlashMessage} userSignupRequest={userSignupRequest}/>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}


export default connect(null,{userSignupRequest,addaddFlashMessage,isUserExist})(SigUp)
