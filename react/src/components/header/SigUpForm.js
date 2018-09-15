import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import {withRouter} from "react-router-dom";

require('../../styles/login.css');

 class SigUpForm extends Component{
    constructor(props){
        super(props);
        this.state={
            usaename:'',
            email:'',
            password:'',
            passwordComfmation:'',
            errors:{},
            isLoding:false,
            invalid:false
        }
    }
    static contextTypes={   //第三种路由方法  通过上下文来获取history
        router:PropTypes.object
    }
    static propTypes={   //验证传过来的变量（函数）
        userSignupRequest:PropTypes.func.isRequired,
        addaddFlashMessage:PropTypes.func.isRequired,
        isUserExist:this.propTypes.func.isRequired   //验证传递过来的方法
    }
    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }
    checkUserExists=(e)=>{   //验证用户的唯一性   
        const field=e.target.name;
        const val =e.target.value;


        if(val!==''){
            this.props.isUserExist(val).then(res=>{    //在这里发送请求进行前后端的验证，但是这里是从action里面传过来的方法
                let errors=this.state.errors;
                let invalid;
                if(res.data.user){
                    errors[field]="this is user with such"+field
                     invalid=true;
                }else{
                    errors[field]=''
                    invalid=false
                }

                this.setState({errors,invalid});
            })
        }
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.setState({errors:{},isLoding:true});
        // axios.post("/api/users",{user:this.state})
        this.props.userSignupRequest(this.state)  //这里是从外面传过来的
        .then(
            ()=>{   //登录成功时跳转
                this.props.addaddFlashMessage({
                    type:'success',
                    text:'恭喜您已经注册成功'
                })
                // this.props.history.push("/")   //第一种方法
                this.context.router.history.push('/');  //第三种方法
            },
            ({response})=>{this.setState({errors:response.data})}
           
        )
    }
    render(){
        const {errors}=this.state
        
        return (
            <div className="container">
            <form onSubmit={this.onSubmit}>
            <h2>欢迎注册</h2>
            <div className="form-group">
                <label className="control-label">用户名：</label>
                <input value={this.state.username} onChange={this.onChange} type="text" name="username" onBlur={this.checkUserExists} className={classnames('form-control',{'is-invalid':errors.username})}/>
                {errors.username && <span className="form-text text-muted">{errors.username}</span>}
            </div>
            <div className="form-group">
                <label className="control-label">邮箱：</label>
                <input value={this.state.email} onChange={this.onChange} type="email" name="email" onBlur={this.checkUserExists} className={classnames('form-control',{'is-invalid':errors.email})}/> 
                {errors.email && <span className="form-text text-muted">{errors.email}</span>}
            </div>
            <div className="form-group">
                <label className="control-label">密码：</label>
                <input value={this.state.password} onChange={this.onChange} type="password" name="password" className={classnames('form-control',{'is-invalid':errors.password})}/>
                {errors.password && <span className="form-text text-muted">{errors.password}</span>}
            </div>
            <div className="form-group">
                <label className="control-label">再次输入密码:</label>
                <input value={this.state.passwordComfmation} onChange={this.onChange} type="password" name="passwordComfmation" className={classnames('form-control',{'is-invalid':errors.passwordComfmation})}/>
                {errors.passwordComfmation && <span className="form-text text-muted">{errors.passwordComfmation}</span>}
            </div>
            <div className="form-group">
                    <button disabled={this.state.isLoding || this.state.invalid} className="btn btn-primary btn-lg">登录</button>
            </div>
        </form>
            </div>
       
        )
    }
}

// export default withRouter(SigUpForm)   //第二种方法，用高阶组件实现
export default SigUpForm;