import { useDispatch, useSelector } from "react-redux"
import { decrementAction, incrementAction, doubleIncAction, addSomethingAction } from "../../redux/actions/counterActions";
import { useState } from "react";

export default function Counter() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch( incrementAction() );
  }

  const decrement = () => {
    dispatch( decrementAction() );
  }

  const double = () => {
    dispatch( doubleIncAction() );
  }

  const [inputValue, setInputValue] = useState('');
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const addBtnClickHandler = () => {
    const parsed = +inputValue;
    if (!Number.isNaN(parsed))
      dispatch( addSomethingAction(parsed) );
    setInputValue('');
  }

  return (
    <div>
      <p>Now counter is: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={double}>Double increment</button>

      <input placeholder="number" onChange={onInputChange} value={inputValue}></input>
      <button onClick={addBtnClickHandler}>Add number</button>
    </div>
  )
}