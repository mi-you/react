// redux 是一种数据存储模式
import { createStore,applyMiddleware } from 'redux'
// 用于在action中发送异步请求
import thunk from 'redux-thunk'
// 用于在浏览器中查看store的值
import { composeWithDevTools } from 'redux-devtools-extension'
// 用于持久化数据存在localStorage中的，不是会话级别的缓存
// 不仅要在这个文件引用redux-persist还要在出口处--index.js--再次使用
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// 导入组合后的小册子(reducer)
import reducer from './reducer'


//为persistReducer定义配置文件
const persistConfig = { 
  key: 'root',
  storage,
  whitelist: ['firstTheme']
}
// 使用persistReducer处理reducer
const pReducer = persistReducer(persistConfig,reducer)

// 创建store -> createStore(reducer)这里的reducer可能被persistReducer处理过了
// 将redux-thunk中间件注入 -> applyMiddleware(thunk)
// 使浏览器可见store -> composeWithDevTools(applyMiddleware(thunk)))
// 上述步骤合并为如下代码
const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
export default store