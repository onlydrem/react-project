import React ,{Component}from 'react';
import classnames from 'classnames';
import {createEvent} from '../../actions/eventActions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


class EventForm extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            errors:{},
            isLoading:false
        }
    }
    static propTypes={
        createEvent:PropTypes.func.isRequired
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.createEvent(this.state)
    }
    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
     }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
            <h2>请登录</h2>
            {errors.from || <div className="alert alert-danger">{errors.form}</div>}
            <div className="form-group">
            <label className="control-label">title：</label>
            <input 
                value={this.state.title} 
                onChange={this.onChange} 
                type='text' 
                name='title' 
                className={classnames('form-control',{'is-invalid':this.state.errors.title})}
                />
        </div>
        <div className="form-group">
        <button disabled={this.state.isLoding} className="btn btn-primary btn-lg">create</button>
    </div>
        </form>

        ) 
    }

}

export default connect(null,{createEvent})(EventForm)