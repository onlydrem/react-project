import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'reactRedux';



//定义组件
export class App extends React.Component {
    render() {
        const { text, onChangeText, onButtonClick } = this.props;
        return (
            <div>
                <h1 onClick={onChangeText}>{text}</h1>
                <button onClick={onButtonClick}>click me </button>
            </div>
        )
    }
}

//action 需要定义一个操作是什么  即 Action
const changeTextAction = {
    type: 'CHANGE_TEXT'
}

const buttonClickAction = {
    type: 'BUTTON_CLICK'
}

//模拟一个异步请求

function fetchIncreaseValue(url) {
    return function (dispatch) {
        return $.get(url).then(re => {
            re = JSON.parse(re);

            console.log(re);

            dispatch({
                type: 'up',
                value: re.value
            });
        })
    }
}

//store 需要用来存放数据的地方  即store redux基本上把所有操作都给了store所以大部分 方法都是store来调用的
let store = createStore(reducer);


//动作发出后，reducer匹配动作gengxinstore中的数据，视图view曾使用subscribe监听阿虎局的改变  使用 store.getStore()来获取store中的数据
store.subscribe(() => console.log(store.getDtate()));
store.subscrib(reducer);



//异步使用react-redux

function mapDispatchToProps_1(dispatch) {
    return {
        increase: () => dispatch({
            type: 'up',
            value: 10
        })
    };
}
function couterUp(state = { number: 100 }, action) {
    switch (action.type) {
        case 'up':
            return {
                // number: state.number + 1
                number: state.number + action.value
            };
        default:
            return state;
    }
}
//reducer

//reducer处理action操作  一个action对应一个reducer
let upAction = function (value) {
    return {
        type: 'up',
        value
    };
}
let downAction = function (value) {
    return {
        type: 'down',
        value
    };
}

let upReducer = function (state = 0, action) {
    switch (action.type) {
        case 'up':
            return state + action.value;
        default:
            return state;
    }
};

let downReducer = function (state = 0, action) {
    switch (action.type) {
        case 'down':
            return state - action.value;
        default:
            return state;
    }
};


//使用多个reducer时，使用redux的combinReducers方法

let reducer = combineReducers({ upReducer, downReducer });
//如果用combineReducer整理了多个reducer,那各个reducer函数中的state是整个state中的reducer同名属性的值
let reducer = combineReducers({ upReducer, downReducer });

let store = createStore(
    reducer,
    { upReducer: 10, downReducer: 10 },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//使用浏览器中的Redux DevTools
const store = createStore(addItem, window, __REDUX_DEVTOOLS_EXTENSION__ && WINDOW, __REDUX_DEVTOOLS_EXTENSION__());
let store = createStore(upReducer, 10, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//派发action操作
store.dispatch(upAction(10));
store.dispatch(upAction(100));
store.dispatch(downAction(10));
store.dispatch(downAction(100))

const initialState = {
    text: 'Hello'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text: state.text == 'hello' ? 'world' : 'hello'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'hello world'
            }
        default:
            return initialState;
    }
}
//store
let store = createStore(reducer);

//映射redux state到组件的属性
function mapStateToProps(state) {
    return { text: state.text }
}

//映射redux actions到组件的属性
function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: () => dispatch(buttonClickAction),
        onChangeText: () => dispatch(changeTextAction)
    }
} 

//链接组件
App = connect(mapStateToProps, mapDispatchToProps)(App)

//渲染组件

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
