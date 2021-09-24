import { createStore } from "redux";

const defaultState ={
  time: 10 
}
const reducers = (state = defaultState, action) =>{
  switch (action.type){
    case "UP" : return {time: state.time + 1};
    case "START" : return {time: state.time - 1};
    case "DOWN": return {time: state.time - 1};
    case "STOP": return state.time
    default: return state
    break;
  }
}

const store = createStore(reducers)
export default store 