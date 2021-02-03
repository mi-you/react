import * as constants from './constants'
const defaultState = {
  theme:'first-theme'
}
const reducer = (state = defaultState,action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case constants.FIRST_THEME_TEST:return first_theme_test(newState,action)
    default:return state
  }
}

function first_theme_test(newState,action){
  newState.theme = action.data
  return newState
}


export default reducer


// import { combineReducers } from 'redux'
// 事实上 combineReducers 也可以在这里使用
// reducer的实质是一个函数返回一个state数据对象
// combineReducer返回的结果就是一个reducer,只是把传入的每个reducer调用一下获取对应的state,然后以传入的reducer的key作为每个state的key
// combineReducer的类似实现如下

// const reducer1 = (state,action) => {test:'1'};
// const reducer2 = (state,action) => {test:'2'};
// const reducers = {red1:reducer1,red2:reducer2};
// function combineReducerImplementation(reducers){
//   // 返回一个函数，该函数返回state,与reducer一样
//   return (state,action) => {
//     const combineState = {}
//     for (const [key,value] of reducers) {
//       // 因为每个reducer会挂到对应的key上所以这里是state[key]
//       combineState[key] = value(state[key],action)
//     }
//     return combineState
//   }
// }

// 基于上述说明所以这里的reducer可以像下面这样使用
// 这样使用的好处是如果此处的reducer比较大，进行拆分会更好管理，
// 至少在使用类似JSON.parse(JSON.stringify(state))的时候处理的state会更小会处理的得更快吧

// const reducerTab1 = (state = {},action) => {
//   const newState = JSON.parse(JSON.stringify(state))
//   switch (action.type) {
//     case constants.FIRST_THEME_TEST:return ((newState,action) => newState)(newState,action)
//     default:return state
//   }
// }
// const reducerTab2 = (state = {},action) => {
//   const newState = JSON.parse(JSON.stringify(state))
//   switch (action.type) {
//     case constants.FIRST_THEME_TEST:return ((newState,action) => newState)(newState,action)
//     default:return state
//   }
// }
// const reducerTab3 = (state = {},action) => {
//   const newState = JSON.parse(JSON.stringify(state))
//   switch (action.type) {
//     case constants.FIRST_THEME_TEST:return ((newState,action) => newState)(newState,action)
//     default:return state
//   }
// }
// export default combineReducer({
//   tab1:reducerTab1,
//   tab2:reducerTab2,
//   tab3:reducerTab3
// })