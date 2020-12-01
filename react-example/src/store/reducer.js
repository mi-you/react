// 用于把各个部分的reducer组合起来
import { combineReducers } from 'redux'

// 导入各个模块的reducer
import { reducer as firstReducer } from '../page/firstTheme/store'
import { reducer as secondReducer } from '../page/secondTheme/store'

// 组合reducer
const rootReducer = combineReducers({
  firstTheme:firstReducer,
  secondTheme:secondReducer
})


export default rootReducer