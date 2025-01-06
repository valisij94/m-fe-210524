import { useDispatch, useSelector } from "react-redux"
import { decrementAction, incrementAction } from "../../redux/actions/counterActions";

export default function Counter() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch( incrementAction() );
  }

  const decrement = () => {
    dispatch( decrementAction() );
  }

  return (
    <div>
      <p>Now counter is: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}