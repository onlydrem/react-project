 import  React from 'react';
 import ReactDOM from 'react-dom';
 
 require('./components/Prop.js');


//  this.poops属性
 var propsData={
  name:'junjun',
  address:'china',
  height:'120cm'
 }

  test((param)=>{
    let newParsm=param.concat("junjun");
   console.log(newParsm);
  })

 ReactDOM.render(
     //父组件的data参数
     //<Props data={"我是Prop属性"} data2={"我是data2的属性"}/>,document.getElement('app')
     <Props data={{...propsData}} age={10} data3={test} />,document.ElemntById('app')
 );
