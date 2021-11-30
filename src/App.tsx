import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from './redux/reducers/index'
import './App.css';
import { depositMoney, resetMoney, retirarMoney } from './redux/actions';


function App() {

  const dispatch = useDispatch();

  const amount = useSelector((state: State) => state.bank)

  const handleDeposito = () => {
    dispatch(depositMoney(1000))
  }
  const handleRetiro = () => {
    dispatch(retirarMoney(500))
  }
  const handleReset = () => {
    dispatch(resetMoney())
  }


  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={handleDeposito}>Desposito</button>
      <button onClick={handleRetiro}>Retiro</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default App;

