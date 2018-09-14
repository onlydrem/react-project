import React from 'react';
// import $ from 'jquery';

require('styles/Container.css');
let fontStyle={
    color:'blue',
    fontSize:20,
    width:100,
    height:36,
    lineHeight:36,
    textAlign:'center',
    margin:'auto'
}
export default class Rend extends React.Component {
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
