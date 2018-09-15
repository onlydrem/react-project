import React ,{Component}from 'react'
import EventForm from 'EventForm'

class CompoNewEvent extends Component{
    render(){
        return(
            <div className="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <EventForm/>
                </div>
                <div class="col-sm-3"></div>
            </div>
        )
    }

}

export default CompoNewEvent;