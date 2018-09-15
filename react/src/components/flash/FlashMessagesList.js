import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {deleteFlashMessage} from '../../actions/flashMessages';

import FlashMessage from './FlashMessage'

class FlashMessagesList extends Component{
    static propTypes={
        message:PropTypes.array.isRequired,
        deleteFlashMessage:PropTypes.func.isRequired
    }
    render(){
        const message=this.props.message.map(message=>{
            <FlashMessage 
                deleteFlashMessage={this.props.deleteFlashMessage}
                key={message.id} 
                message={message}
            />
        })
        return(
            <div className="container">
                {message}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        message: state.flashMessage
    }
}
export default connect(mapStateToProps,{deleteFlashMessage})(FlashMessagesList);