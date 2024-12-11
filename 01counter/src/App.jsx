import {useState} from 'react';
import './App.css';

function App() {
  let [counter , setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter+1);
  }
  const handleDecrement = () => {
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Count : {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <br />
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
