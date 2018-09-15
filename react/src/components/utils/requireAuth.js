//高阶组件   也就是创建可以复用的组件
    import React ,{Component} from 'react';
    import {connect} from 'react-redux';
    import PropTypes from 'prop-types';
    import {addFlashMessage} from '../../actions/flashMessages';


    export default function(ComposedComponent){  //这个参数即一个组件
        class Authenticate extends Component{
            componentWillMount(){   //组件被挂载时进行验证
                if(!this.props.isAuthenticated){
                    this.props.addFlashMessage({
                        type:'danger',
                        text:'您还没有登陆'
                    })
                    this.context.router.history.push('/');
                }
            }
            AuthenticatecontextTypes={
                router:PropTypes.object.isRequired
            }
            AuthenticatePropTypes={
                isAuthenticated:PropTypes.bool.isRequired,
                addFlashMessage:PropTypes.func.isRequired
            }
            componentWillUpdate(nextProps){
                if(!nextProps.isAuthenticated){
                    this.context.router.history.push('/')
                }
            }
                render(){
                return(
                   <ComposedComponent {...this.props}/>   //高阶组件的常规写法
                );
            }
        }

        //判断是否登录
      const mapStateToProps = (state) => {
            return {
                isAuthenticated: state.auth.isAuthenticated
            }
        }

        return connect(mapStateToProps,{addFlashMessage})(Authenticate);

    }
