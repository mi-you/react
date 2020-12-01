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