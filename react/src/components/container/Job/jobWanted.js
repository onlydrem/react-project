import React from 'react';
import $ from 'jquery';

require('styles/Container.css');

export default class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        // this.getAjax(); setInterval(()=>this.getAjax(),1000);
    }
    getAjax() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: data => {
                this.setState({data: data.data})
            },
            error: error => {
                //   console.log(error);
            }

        });
    }
    getInitialState() {
        return {data: []}
    }
    componentDidMount() {
        this.getAjax();
    }

    render() {
        //  console.log(this.state.data)

        return (
            <div style={{
                marginBottom: 36
            }}>
                {this
                    .state
                    .data
                    .map((item, index) => {
                        // let itemTitle=item.title.slice(3); console.log(item,index);
                        return <div
                            key={index}
                            style={{
                            color: 'black'
                        }}>
                            <div className="list clearfix">
                                <div className="list-top">
                                    <p className="JobId" ref="itemTitle">{item.title}</p>
                                </div>
                                <div className="list-middle">
                                    <p className="Times">{item.last_reply_at}</p>
                                </div>
                                <div className="list-center clearfix">
                                    <p className="Company">
                                        <span>杭州余杭区</span>
                                        <span>经验不限</span>
                                        <span>本科</span>
                                    </p>
                                </div>
                                <div className="list-bottom">
                                    <p className="Company"><img src=""/>
                                        <span>{item.author_id}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    })
}
            </div>
        )
    }

}
