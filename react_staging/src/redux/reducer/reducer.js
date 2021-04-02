import { TYPE_1,TYPE_2 } from '../constants'
const initState = {init:0}

export default function(state = initState,action){
  const { type,data } = action
  switch (type) {
    case TYPE_1: return {...state}
    case TYPE_2: return {...state}  
    default:return state
  }
}