import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import { increment, decrement, incrementByAmount } from "../../redux/slices/counterSlice";

export default function Counter() {

  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch( increment() );
  }

  const dec = () => {
    dispatch( decrement() );
  }

  const double = () => {
    dispatch( incrementByAmount(2) );
  }

  const [inputValue, setInputValue] = useState('');
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const addBtnClickHandler = () => {
    const parsed = +inputValue;
    if (!Number.isNaN(parsed))
      dispatch( incrementByAmount(parsed) );
    setInputValue('');
  }

  return (
    <div>
      <p>Now counter is: {counter}</p>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <button onClick={double}>Double increment</button>

      <input placeholder="number" onChange={onInputChange} value={inputValue}></input>
      <button onClick={addBtnClickHandler}>Add number</button>
    </div>
  )
}