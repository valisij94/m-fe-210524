import { useContext } from "react";
import { CounterContext } from "../../context/CounterContext.jsx";

export default function SimpleCounter() {

  const counterValue = useContext(CounterContext);

  return (
    <p> Now counter is: {counterValue}</p>
  )
}