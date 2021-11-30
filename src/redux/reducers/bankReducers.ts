import { Action } from "../types";
import { ActionType } from "../types/action-type";

const initialState = 0;
  
const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    
    case ActionType.DEPOSITO:
      return state + action.payload;
      
    case ActionType.RETIRO:
      return state - action.payload
      
    case ActionType.RESET:
      return 0;
      
    default:
      return state
  }
}

export default reducer;