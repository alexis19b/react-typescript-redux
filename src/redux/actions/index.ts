import {Dispatch} from 'redux';
import { Action } from '../types';
import { ActionType } from '../types/action-type';


export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSITO,
      payload: amount,
    })
  }
}

export const retirarMoney = (amount:number) =>{
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RETIRO,
      payload: amount
    })
  }
}
export const resetMoney = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESET
    })
  }
}