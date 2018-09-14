import React from 'react';
import $ from 'jquery';

require('styles/Daily.css')

export default class Daily extends React.Component {

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
                //   console.log(data)
                this.setState({data: data.list})
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
        // console.log(this.state.data);
        return (
            <div className="DailyBox">
                {this
                    .state
                    .data
                    .map((item, index) => {
                        return <div key={index} className="DailyList">
                            <div className="tupian"><img src={item.src}/></div>
                            <div className="DailyText">
                                <p className="DailyName">{item.title}</p>
                                <p className="price">
                                    <del>{item.oldPrice}</del>
                                </p>
                                <p className="newprice">{item.newPrice}</p>
                            </div>
                        </div>
                    })
}
            </div>
        )
    }
}