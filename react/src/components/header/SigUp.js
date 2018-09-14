import React,{Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {userSignupRequest} from "../../actions/signupActions"

import SigUpForm from "./SigUpForm";

 class SigUp extends Component{
     static propTypes={
        userSignupRequest:PropTypes.func.isRequired
     }
    render(){
        return(
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SigUpForm history={this.props.history} userSignupRequest={this.props.userSignupRequest}/>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}


export default connect(null,{userSignupRequest})(SigUp)
