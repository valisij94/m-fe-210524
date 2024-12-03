import { useEffect, useState } from "react";

export default function SimpleCounter( {headerProp} ) {

  const [count, setCount] = useState(0);

  const incrementClickHandler = () => {
    setCount( count + 1 );
  }

  const decrementClickHandler = () => {
    setCount( count - 1 );
  }

  useEffect( () => {

    console.log('Effect on mounting phase!');

    const intervalId = setInterval( () => {
      console.log('Hey from interval!');
    }, 1000);

    return () => {
      console.log('component Simplecounter will be unmounted!')
      clearInterval(intervalId);
    }
  }, []);

  useEffect( () => {
    console.log('Prop headerProp had changed!')
  }, [headerProp]);

  useEffect( () => {
    console.log('Count state fragment had been changed!')
  }, [count]);

  return (
    <div style={{backgroundColor: 'lightblue'}}>
      <p>{headerProp}</p>
      <p>Clicked {count} times!</p>
      <button onClick={incrementClickHandler}>Increment</button>
      <button onClick={decrementClickHandler}>Decrement</button>
    </div>
  )
}