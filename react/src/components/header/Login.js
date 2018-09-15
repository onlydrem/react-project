import React ,{Component}from 'react';


import LoginForm from './LoginForm';



class Login extends Component {
    render(){
        return(
            <div className="container">
            <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
                <LoginForm/>
            </div>
            <div className="col-sm-3"></div>
        </div>
            </div>
      
        );
    }
  
}

export default Login;