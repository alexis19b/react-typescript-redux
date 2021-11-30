interface DepositoAction{
  type: 'deposito',
  payload: number,
}
interface RetiroAction{
  type: 'retiro',
  payload: number,
}
interface ResetAction{
  type: 'reset',

}

export type Action = DepositoAction | RetiroAction |ResetAction