import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {userSignupRequest,isUserExist} from '../../actions/signupActions';
import {addFlashMessage} from '../../actions/flashMessages'

import SigUpForm from './SigUpForm';

 class SigUp extends Component{
     static propTypes={
        userSignupRequest:PropTypes.func.isRequired,
        addFlashMessage:PropTypes.func.isRequired,
        isUserExist:PropTypes.func.isRequired
     }
    render(){
        const {userSignupRequest,addFlashMessage,isUserExist}=this.props
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SigUpForm history={this.props.history} isUserExist={isUserExist} addFlashMessage={addFlashMessage} userSignupRequest={userSignupRequest}/>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}


export default connect(null,{userSignupRequest,addFlashMessage,isUserExist})(SigUp)
