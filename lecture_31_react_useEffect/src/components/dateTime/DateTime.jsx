import { useEffect, useState } from "react";

export default function DateTime() {

  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect( () => {

    const intervalId = setInterval( () => {
      setTime( new Date().toLocaleString() );
    }, 1000 );

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <p>{time}</p>
  )
}