import { useState } from "react";

export default function SimpleCounter( {id} ) {

  const [count, setCount] = useState(0);

  const incrementClickHandler = () => {
    setCount( count + 1 );
  }

  const decrementClickHandler = () => {
    setCount( count - 1 );
  }

  console.log('Rendering counter with id ' + id);

  return (
    <div>
      <p>Clicked {count} times!</p>
      { !!count && count % 5 === 0 && <p>Multiple of five!</p>}
      <button onClick={incrementClickHandler}>Increment</button>
      <button onClick={decrementClickHandler}>Decrement</button>
    </div>
  )
}