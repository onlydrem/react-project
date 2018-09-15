import React ,{Component} from 'react';
import classnames from 'classnames';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import {login} from '../../actions/authActions.js'
import validateInput from '../utils/validations/login'

class LoginForm extends Component {

    constructor(props){
        super(props)
        this.state={
            identifier:'',
            password:'',
            errors:{},
            isLoading:false
        }
    }
    static contextTypes={
        router:PropTypes.object.isRequired
    }
    static propTypes={
        login:PropTypes.func.isRequired
    }
    onChange = (e) =>{
       this.setState({[e.target.name]:e.target.value})
    }
    isValid=()=>{
        const {errors,isValid}=validateInput(this.state);
        
        if(!isValid){
            this.setState({errors});
        }
        return isValid;
    }
    onSubmit=(e)=>{
        e.preventDefault()
        if(this.isValid()){
            this.setState({errors:{},isLoading:true});
            this.props.login(this.state).then(
                (res)=>this.context.router.history.push('/'),
                (err)=>this.setState({errors:err.response.data.errors,isLoading:false})
            )
        }
    }
    render(){
        const {identifier,password,errors,isLoading}=this.state
        return(
            <form onSubmit={this.onSubmit}>
            <h2>请登录</h2>
            {errors.from || <div className="alert alert-danger">{errors.form}</div>}
            <div className="form-group">
            <label className="control-label">用户名/邮箱：</label>
            <input 
                value={identifier} 
                onChange={this.onChange} 
                type="text" 
                name="identifier" 
                className={classnames('form-control',{'is-invalid':errors.username})}
                />
            {errors.username && <span className="form-text text-muted">{errors.username}</span>}
        </div>

        <div className="form-group">
        <label className="control-label">密码：</label>
        <input 
            value={password} 
            onChange={this.onChange} 
            type="text" 
            name="password" 
            className={classnames('form-control',{'is-invalid':errors.username})}
            />
            {errors.username && <span className="form-text text-muted">{errors.username}</span>}
        </div>
        <div className="form-group">
            <button disabled={isLoading} className="btn btn-primary btn-lg">登录</button>
        </div>
        </form>
        )
    }
  
}

export default connect(null,{login})(LoginForm)