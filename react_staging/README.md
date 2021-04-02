```
  npm i nanoid // 可以生成全世界唯一的值用于id
  npm i prop-types // 用于限制props
  npm i axios // 发送网络请求
  npm i pubsub-js // 可以用来发布订阅（实际项目是redux）
  npm i react-router-dom //针对web端的官方路由
```

## 路由組件与一般组件
  1. 写法不同：
      - 一般组件：`<Hello />`
      - 路由组件：`<Route path='/hello' component={Hello}/>`
  2. 存放位置不同：
      - 一般组件：components
      - 路由组件：pages
  3. 接收到的props不同：
      - 一般组件：写组件标签时传递了什么就收到什么
      - 路由组件：接收到三个固定的属性(以下属性是经过删减的)
        ```
        history:
            go: ƒ go(n)
            goBack: ƒ goBack()
            goForward: ƒ goForward()
            push: ƒ push(path, state)
            replace: ƒ replace(path, state)
        location:
            hash: ""
            pathname: "/hello"
            search: ""
            state: undefined
        match:
            params: {}
            path: "/hello"
            url: "/hello"
        ```
## NavLink 的封装
见：MyNavLink.js
## Switch 的使用
- 通常情况下 `path` 和 `component` 是一一对应的
- 包裹在`<Route />`外作用是，只匹配一个，如果同一个path有多个component只展示第一个不想下继续匹配，提高效率
## 解决多级路径刷新页面样式丢失的问题
- public/index.html中引入的样式时不写 ./ 写 /（常用）
- public/index.html中引入的样式时不写 ./ 写 %PUBLIC_URL%（仅限react脚手架）
- 把BrowserRouter 改成 HashRouter
## exact 开启路由的严格匹配
## Redirect 重定向（兜底）
## 路由由组件传递参数
- params参数
    - 路由链接（携带参数）：`<Link to='/welcome/tab2/detail/1'>{v.name}</Link>`
    - 注册路由（声明接收）：`<Route path='/welcome/tab2/detail/:id' component={ Detail }/>`
    - 接收参数：`const { id } = this.props.match.params`
- search参数
    - 路由链接（携带参数）：`<Link to='/welcome/tab2/detail/?id=1'>{v.name}</Link>`
    - 注册路由（无需声明，正常注册即可）：`<Route path='/welcome/tab2/detail component={ Detail }/>`
    - 接收参数：`const { search } = this.props.location`
    - 备注：获取的search是urlencoded编码的字符串，需要借助querystring解析或手动解析
- state参数
    - 路由链接（携带参数）：`<Link to={{pathname:'/welcome/tab2/detail',state:{id:v.id}}}>{v.name}</Link>`
    - 注册路由（无需声明，正常注册即可）：`<Route path='/welcome/tab2/detail' component={ Detail }/>`
    - 接收参数：`const { id } = this.props.location.state || { }`
    - 备注：刷新也可以保留参数的
## 编程式路由导航
- 路由组件能直接使用这些方法
    - `this.props.history.go: ƒ go(n)`
    - `this.props.history.goBack: ƒ goBack()`
    - `this.props.history.goForward: ƒ goForward()`
    - `this.props.history.push: ƒ push(path, state)`
    - `this.props.history.replace: ƒ replace(path, state)`
- 一般组件需要使用 `withRouter` 函数加工一下
    - `withRouter`的作用是给一般组件添加路由组件身上特有的那三个属性
    - 用法 
        - `import { withRouter } from 'react-router-dom'`
        - `export default withRouter(NormalComponentName)`
## BrowserRouter 与 HashRouter的区别（BrowserRouter用的比较多）
    - 底层原理不一样
        - BrowserRouter使用的是H5的history API，不兼容IE9及以下 - popstate事件
        - HashRouter使用URL的哈希值 - hashchange事件
    - path表现形式不一样
        - BrowserRouter的路径中没有#
        - HashRouter的路径包含#
    - 刷新后对路由state参数的影响
        - BrowserRouter没有任何影响，因为state保存在history对象中
        - HashRouter刷新后会导致路由state参数丢失
    - 备注
        - HashRouter 可用于解决一些路径错误问题
## Redux
- `store.getState()` 获取状态
- `store.dispatch({})` 派发事件
- `store.subscribe(() =>{})` 订阅状态改变
## Redux 开发者工具
- `npm i redux-devtools-extension`
- 在store.js里添加些代码
```
    import {composeWithDevTools} from 'redux-devtools-extension'
```

# 一些扩展
## 1 setState
- 对象式和函数式（对象式的setState是函数式的一个语法糖）
```javascript
// 对象式
this.setState({},() => {})
// 函数式
this.setState((state,props) => {
    return {}
},() => {})
```
## 2 路由懒加载
- 一般针对的是路由
```javascript
// lazy 实现懒加载，Suspense在组件没回来时展示的内容
import React,{Component,lazy,Suspense} from 'react'
import {Route} from 'react-router-dom'
// import Home from './Home'
const Home = lazy(() => import('./Home'))

// ... 中间省略
render(){
    return (
        <div>
            <Suspense fallback={<h1>loading...</h1>}>
                <Route path='/home' component={Home}>
            </Suspense>
        </div>
    )
}
```

## 3 Hooks（react16.8之前没有）
- `useState(initValue)`
```javascript
function Demo(){
    /*
        返回的数组只包含两个值 -> [状态,更新状态的方法]
        虽然每次更新都会调用Demo函数，但是react内部做了处理（缓存），
            不会因为函数的再次调用而覆盖name值
    */ 
    let [name,setName] = React.useState('米又')
    function add(){
        /*
            setName可以传一个值也可以还是一个函数
            setName(value => newValue)
        */ 
        setName(name+'eee')
    }
    return (
        <div onClick={add}>demo:{name}</div>
    )
}
```
- `useEffect(() => {},[])`
```javascript
    // 相当于 componentDidMount() + 监听所有变量改变componentDidUpdate
    useEffect(()=>{})
    // 相当于componentDidMount()
    useEffect(()=>{},[])
    // 相当于componentDidMount() + 监听指定变量改变componentDidUpdate
    useEffect(()=>{},[varName,varName])
    // 相当于componentDidMount() + 监听指定变量改变componentDidUpdate + componentWillUnmount()
    useEffect(()=>{
        return () => {
            // 这个返回的函数相当于componentWillUnmount()
        }
    },[varName,varName])
```
- `useRef()`
```javascript
    /*
        相当于之前的React.createRef()
        专人专用
    */ 
    const myRef = React.useRef()

    <input type='text' ref={myRef} />
```
## 4 Fragment
- 种拥有一个一个属性 `key`
- 也可以用空标签 `<></>`，不过不能接受任何属性
## 5 Context
- 常用语 祖组件 或 更深层次的组件 之间的数据传输
- 在父组件（祖先）上创建一个提供数据的东东
```javascript
/*
    MyContent上有Provider 和 Consumer 两个（组件）
        Provider在本身使用，
        Consumer在后代上使用获取数据，或者 使用下面这种（限于类组件）获取数据
            static contextType = MyContext
                ...
            const data = this.context
*/
MyContext = React.createContext()
```
- 后代组件获取数据有两种写法
    -  声明取值这种不适合函数组件
    ```javascript
        static contextType = MyContext
        this.context
    ```
    - 使用Consumer（第三方开发插件使用）
    ```javascript
    render(){
        return (
            <div>
            <!-- value就是传递的数据 -->
                <Consumer>
                    { value => xxx}
                </Consumer>
            </div>
        )
    }
    ```
- 例子
```javascript
    /*
        <A>
            <B>
                <C/>
            </B>
        </A>
        this中有state,props,refs,也有context
    */
    // A 省略部分
    const MyContext = React.createContext()
    export default class A extends Component{
        state = {userName:'米又'}
        render(){
            const { username } = this.state
            return (
                <div>
                    <h1>A</h1>
                    <MyContext.Provider value={username}>
                        <B />
                    </MyContext.Provider>
                </div>
            )
        }
    }
    // C
    export default class C extends Component{
        // C想使用，需要先主动举手声明说我想使用，只后this.context里就有数据了，不然this.context还是空对象
        static contextType = MyContext
        render(){
            const { username } = this.state
            return (
                // 因为A中传递的不是对象，所以不用this.context.xxx了
                <div>
                    {'username:' + this.context }
                </div>
            )
        }
    }
```
## 6 组件优化
- Component的2个问题
    - 只要执行setState(),即使不改变状态组件也会更新 => 效率低
    - 只要当前组件render(),即使子组件没用用到父组件的任何数据也会render() => 效率低
- 效率高的做法
    - 只有当组件的state或props数据发生改变时才重新render()
- 原因
    - shouldComponentUpdate 一直返回 true
- 解决
    1. 重写shouldComponentUpdate()方法，比较新旧state和props,如果有变化返回true,没有返回false
    2. 使用`PureComponent`:之前是继承Component，改成继承PureComponent。PureComponent重写了shouldComponentUpdate()
    只有state或props发生变化才返回true
    > 注意：PureComponent的比较是浅比较，不要直接修改state数据。项目中一般使用PureComponent来优化
## 7 render Props
- 通过标签属性传入结构，一般使用render，**可以传递数据**
```javascript
class C extends Component{
    render(){
        return (
            <A render={ value => <B xxx={value}>}>
        )
    }
}
class B extends Component{
    render(){
        return (
            <div>B</div>
        )
    }
}
class A extends Component{
    render(){
        return (
            <div>
                <p>A</p>
                {(typeof this.props.render === 'function') && this.props.render(this.state.xxx)}
            </div>
        )
    }
}
```
## 8 错误边界
- 只能捕获后代组件**生命周期**产生的错误，不能捕获自己组件和其他组件在合成事件。定时器中产生的错误
```javascript
export default class Parent extends Component{
    state = { hasError:false }
    /*
        当Parent（也就是这个组件）的子组件发送错误时，调用这个
        ps:之前有学过另一个钩子函数getDerivedStateFromProps
    */ 
    static getDerivedStateFromError(err){
        return {hasError:err}
    }
    componentDidCatch(){
        //此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决。这个有没有都可以
    }
    render(){
        const {hasError} = this.state
        return (
            <div>
                { hasError?<h2>出错了</h2>:<ChildComponent /> }
            </div>
        )
    }

}   
```
