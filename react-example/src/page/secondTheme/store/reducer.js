import * as constants from './constants'
const defaultState = {
  theme:'second-theme'
}

const reducer = (state = defaultState,action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case constants.SECOND_THEME_TEST:return second_theme_test(newState,action)
    default:return state
  }
}

function second_theme_test(newState,action){
  newState.theme = action.data
  return newState
}


export default reducer