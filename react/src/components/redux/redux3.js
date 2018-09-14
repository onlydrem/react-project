
// 第一步  引入createStore包依赖
import { createStore } from 'redux'

// @Reducer
//
// Action Payload = action.text
// 使用纯函数的数组unshift，不能有副作用
// state(状态)一开始的值是空数组`state=[]`
function addItem(state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return [action.text, ...state]
        default:
            return state
    }
}

// @Store
//
// store = createStore(reducer)
// 使用redux dev tools
// 如果要正常使用是使用 const store = createStore(addItem)
const store = createStore(addItem,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// @Render
//
// render(渲染)是从目前store中取出state数据，然后输出呈现在网页上
function render() {
    const items = store.getState().map(item => (
        (item) ? `<li>${item}</li>` : ''
    ))
    document.getElementById('itemlist').innerHTML = `<ul>${items.join('')}</ul>`
}

// 第一次要调用一次render，让网页呈现数据
render()

// 订阅render到store，这会让store中如果有新的state(状态)时，会重新调用一次render()
store.subscribe(render)

// 监听事件到 "itemadd" 按钮,
// 点按按钮会触发 store.dispatch(action)，发送一个动作，
// 例如 store.dispatch({ type: 'ADD_ITEM', textValue })
document.getElementById('itemadd')
    .addEventListener('click', () => {
        const itemText = document.getElementById('itemtext')

        // 调用store dispatch方法
        store.dispatch({ type: 'ADD_ITEM', text: itemText.value })

        // 清空文本输入框中的字
        itemText.value = ''

    })


//store中的方法    Redux中的store是一个保存整个应用state对象树的对象，其中包含了几个方法，它的原型如下:

type Store = {

    //最重要的是前面两个  subscribe之后在react中不需要再使用

    //dispatch用于发送action（动作）使用的方法
    dispatch: Dispatch
    //getState取得目前state的方法
    getState: () => State  dispatch: (action: A) => A




  //dispatch一发送动作，store中的reducer将会同步传入目前的状态(getState()) ，以及给定的action两者，开始计算新的状态并回传。回传后，更动的监听目标将会被通知(用subscribe注册的回调) ，再次调用getState()可以得到新的状态值。

//subscribr注册一个回调函数，当state有更动时会调用它
subscribe: (listener: () => void) => () => void

    //replaceReducer高级api用于动态加载其他的reducer一般不会用到
    replaceReducer: (reducer: Reducer) => void
}

//store用法
import { createStore } from 'redux'

// 由todos这个reducer创建store
// 第二个传参是初始的状态，是可选的
let store = createStore(todos, ['Use Redux'])

// Action Creator(动作创建器)
function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

// 用store.dispatch(action)发送动作
// 传参先用Action Creator(动作创建器)来创建出action的对象格式
store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))


//reducer 的使用  状态的更动方法
//当然你也可以用for语句来写这个处理的程序，不过会愈写代码愈长，FP的风格会追求简洁，尽可能利用无副作的JS内建方法




function addItem(state = [], action) {
    // 拷贝出一个新的数组
    // newState = [...state]语法也可以
    // newState = state.concat()也可以
    const newState = state.slice()

    // 附加新成员在新的数组前面，
    // 注意这是一个有副作用的数组方法
    newState.unshift(action.payload)

    // 回传处理过的新数组
    return newState
}


// 第二个演示的例子是要从数组中删除其中一个索引值为action.index的成员，会这样写

//用filter这个JS中内建的数组方法，可能对初学者来说没那么直观，filter会依照回调传参布尔结果进行过滤，产生一个全新的数组。

function removeItem(state = [], action) {
    return state.filter((item, index) => index !== action.index)
}


//如果你不用这语法会怎么写？要用slice这个用来拆分一个数组的为子数组的方法，像下面这样，你会发现代码又开始变长了

function removeItem(state, action) { return [...state.slice(0, action.index), ...state.slice(action.index + 1)] }

//其它的还有在数组其中的一个索引值中进行插入，以及更动其中一个索引值的成员值(通常是对象)


// 插入数组的其中一个索引值
function insertItem(state, action) {
    return [
        ...state.slice(0, action.index),
        action.item,
        ...state.slice(action.index)
    ]
}


function updateObjectInArray(state, action) {
    return state.map((item, index) => {
        if (index !== action.index) {
            // 这不是要更动的数组成员，直接回传
            return item;
        }

        // 这是要更动的数组成员，作合成
        return {
            ...item,
            ...action.item
        }
    })
}


//至于如果state是一个对象值时，用的也是拷贝出一个新的对象的语法，这通常是使用Object.assign这个JS的内建方法来作
const initialState = {
    fetching: false,
    list: []
}

function addUser(state = initialState, action) {
    return Object.assign({}, state, { fetching: true })
}


