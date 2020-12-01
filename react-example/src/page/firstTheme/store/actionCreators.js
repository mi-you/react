import * as constants from './constants'

// 同步action
export const firstThemeTest = (data) => ({
  type:constants.FIRST_THEME_TEST,
  data
})

// 异步action 需要使用redux-thunk
export const requestData = (params) => {
  return (dispatch,getState) => {
    // getState用于获取store内的数据，如获取必要的查询参数
    // const store = getState()
    // 异步获取数据后把数据通过dispatch派发出去
    setTimeout(res => dispatch(firstThemeTest(res),1000,'net-test'))
  }
}