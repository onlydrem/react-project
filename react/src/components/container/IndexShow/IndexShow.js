import React from 'react';

require('styles/Container.css');
// import $ from 'jquery';
let fontStyle={
    color:'green',
    fontSize:20,
    width:100,
    height:36,
    lineHeight:36,
    textAlign:'center',
    margin:'auto'
}
export default class IndexShow extends React.Component {
    render() {
        return (
            <div style={{
                marginBottom: 36
            }}>
               <h2 style={fontStyle}>暂无数据</h2>
            </div>
        )
    }

}

