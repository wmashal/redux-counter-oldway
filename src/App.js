import { useSelector,useDispatch } from 'react-redux';

function App() {
  const dispatcher = useDispatch();
  const increment = () => {
    dispatcher({type:"INC"})
  }

  const decrement = () => {
    dispatcher({type:"DEC"})
  }

  const addByTen = () => {
    dispatcher({type:"addByTen",payload:10})
  }

  const counter = useSelector((state) => state.counter)
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addByTen}>Add 10</button>
    </div>
  );
}

export default App;
