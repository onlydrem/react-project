import React from 'react';
import ReactDOM from 'react-dom'

var Button = React.createClass({
    getInitialState: function() {
      return {
        data:0
      };
    },
    setNewNumber: function() {
      this.setState({data: this.state.data + 1})
    },
    killComponent:function(){
      ReactDOM.unmountComponentAtNode(  document.getElementById('example') );
    },
    render: function () {
        return (
           <div>
              <button onClick = {this.setNewNumber}>计数增加</button><br />
              <Content myNumber = {this.state.data}></Content>
              <button onClick = {this.killComponent}>销毁组件</button>
           </div>
        );
      }
  })
  var Content = React.createClass({
      getDefaultProps:function(){
          // console.log('getDefaultProps!');
      },
      getInitialState:function(){
          // console.log('getInitialState!');
          return {
            data:0
          };
      },
    componentWillMount:function() {
        // console.log('componentWillMount!')
    },
    componentDidMount:function() {
        //  console.log('componentDidMount!')
    },
    componentWillReceiveProps:function(newProps) {
          // console.log('componentWillReceiveProps!')
    },
    shouldComponentUpdate:function(newProps, newState) {
          // console.log('shouldComponentUpdate:true');
          return true;
    },
    componentWillUpdate:function(nextProps, nextState) {
          // console.log('componentWillUpdate!');
    },
    componentDidUpdate:function(prevProps, prevState) {
          // console.log('componentDidUpdate!')
    },
    componentWillUnmount:function() {
          //  console.log('componentWillUnmount!')
    },
      render: function () {
          // console.log('render');
        return (
          <div id='content'>
            <h3>{this.props.myNumber}</h3>
          </div>
        );
      }
  });
  ReactDOM.render(
     <div>
        <Button />
     </div>,
    document.getElementById('example')
  );