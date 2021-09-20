import { createStore } from "redux";

const defaultState ={
  num: 10 
}
const reducers = (state = defaultState, action) =>{
  switch (action.type){
    case "GET": return {num: Math.ceil(Math.random()*10)}
    case "RESET": return defaultState
    default: return state
  }
}

const store = createStore(reducers)
export default store 