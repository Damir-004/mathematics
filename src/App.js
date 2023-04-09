import React,{useState} from 'react';
import './App.css';

const App = ()=> {
  const [value, setValue]= useState(0)
  return(
    <div className='container'>
        <p>Counter: {value}</p>
        <button onClick={() => setValue(value+1)}>+1</button>
        <button onClick={() => setValue(value-1)}>-1</button>
        <button onClick={() => setValue(value*2)}>X2</button>
        <button onClick={() => setValue(value/2)}>/2</button>
        <button onClick={() => setValue(0)}>RESET</button>
    </div>
  )
}
export default App