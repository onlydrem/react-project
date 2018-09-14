import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'reactRedux';


//首先定义两个组件.一增一减

class Increase extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('increase: ', nextProps);
    }

    render() {
        return <p onClick={this.props.increase}>increase: {this.props.number}</p>
    }
}

export default class Decrease extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('decrease: ', nextProps);
    }

    render() {
        return <p onClick={this.props.decrease}>decrease: {this.props.number}</p>
    }
}
//定义两个reducer

function couterUp(state = { number: 100 }, action) {
    switch (action.type) {
        case 'up':
            return {
                number: state.number + 1
            };
        default:
            return state;
    }
}

function counterDown(state = { number: -100 }, action) {
    switch (action.type) {
        case 'down':
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

//创建store
let couter = combineReducers({
    couterUp,
    counterDown
});

let store = createStore(
    couter,
    { couterUp: { number: 10 } },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),


    //创建连接两个组件对应的两个mapStateToProps 和 mapDispatchToProps  注意state为整个store中的state，取值要取各reducer同名属性如 state.couterUp

    // function mapStateToProps_1(state) {
    //     return {
    //         number: state.couterUp.number
    //     };
    // }
    mapStateToProps_1(state=>{
        return{
            number:state.couterUp
        }
    }),
    
    // function mapDispatchToProps_1(dispatch) {
    //     return {
    //         increase: () => dispatch({
    //             type: 'up'
    //         })
    //     };
    // }
    mapDispatchToProps_1(dispatch=>{
        return{
            increase:()=>dispatch({
                type:'up'
            })
        };
    }),
    
    // function mapStateToProps_2(state, props) {
    //     return {
    //         number: state.counterDown.number
    //     };
    // }
    mapStateToProps_2((state,props)=>{
        return{
            number:state.counterDown.number
        };
    }),
    
    // function mapDispatchToProps_2(dispatch) {
    //     return {
    //         decrease: () => dispatch({
    //             type: 'down'
    //         })
    //     };
    // }
        mapDispatchToProps_2(dispatch=>{
            return{
                decrease:()=>dispatch({
                    type:'down'
                })
            }
        });

    //各组件用connect包装
    let APP_1 = connect(
        mapStateToProps_1,
        mapDispatchToProps_1
    )(Increase);

let APP_2 = connect(
    mapStateToProps_2,
    mapDispatchToProps_2
)(Decrease);

// 置入<Provider />中  注意只能有一个父级，所以得先简单包装一层

let APP = () => (
    <div>
        <APP_1 />
        <APP_2 name="APP_2" />
    </div>
);

render(
    <Provider store={store}>
        <APP />
    </Provider>,
    document.getElementById('box')
);



//connect方法接收可接收四个参数，上面已经谈到了前两个，后两个不那么常用

// 第三个参数，这里不多说：[mergeProps(stateProps, dispatchProps, ownProps): props] (Function)

// 第四个参数：[options] (Object)

// 这个options中有如下几个属性：

// pure: true(默认)|false 表示是否在调用connect前三个参数的函数方法之前先检测前后store中的值是否改变，改变才调用，否则不调用
// areStatesEqual: 函数，当pure为true时调用这个函数检测是否相等，返回true|false表示是否相等，默认以严格相等===来判断前后值是否相等
// areOwnPropsEqual: 类似areStatesEqual，只不过它默认是用不严格相等==来判断
// areStatePropsEqual: 类似areStatesEqual，只不过它默认是用不严格相等==来判断
// areMergedPropsEqual: 类似areStatesEqual，只不过它默认是用不严格相等==来判断
// 来看个例子，现在要手动的定义这个参数

// 针对Decrease，在减1时直接返回了false

let APP_2 = connect(
    mapStateToProps_2,
    mapDispatchToProps_2,
    null,
    {
        pure: true,
        areStatesEqual: (next, prev) => {
            console.log(next.counterDown, prev.counterDown);
            return next.counterDown.number < prev.counterDown.number;
        }
    }
)(Decrease);