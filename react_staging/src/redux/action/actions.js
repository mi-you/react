import {TYPE_1,TYPE_2} from '../constants'

export const action1 = data => ({type:TYPE_1,data})
export const action2 = data => ({type:TYPE_2,data})

export const actionAsync = data => {
  return (dispatch,getState) => {
    setTimeout(() => {
      dispatch(action1(data))
    },1000)
  }
}