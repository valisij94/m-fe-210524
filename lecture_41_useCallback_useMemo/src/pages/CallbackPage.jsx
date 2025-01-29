import { memo, useCallback, useMemo, useState } from "react"

function AttemptsList( { attempts, dropAttempt } ) {

  console.log('Render attepts list');
  return (
    attempts && <div>
      {attempts.map( attempt => <p onClick={() => {dropAttempt(attempt.key)}} key={attempt.key}>Attempt time: {attempt.value}</p>) }
    </div>
  )
};

const MemoizedAttemptsList = memo(AttemptsList);

export default function CallbackPage() {

  const [attempts, setAttempts] = useState([]);
  const [input, setInput] = useState('');

  const addAttempt = () => {
    const stringifiedDate = Date.now();
    setAttempts( old => ([...old, { key: stringifiedDate, value: input }]));
  }

  const dropAttempt = useCallback((attemptId) => {
    setAttempts( old => old.filter( el => el.key !== attemptId ) );
  }, []);

  const heavyCalculation = useMemo(() => {
    console.log('Called HEAVY FUNCTION');
    // Do some heavy calculations...
    return 1;
  }, []);

  const memoizedAttemps = useMemo( () => {
    return attempts.filter( el => el.value.indexOf('A') >= 0 );
  }, [attempts])

  return (
    <div>
      <h3>Work with useCallback hook</h3>
      <input value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={addAttempt}>Add attempt</button>
      <MemoizedAttemptsList attempts={memoizedAttemps} dropAttempt={dropAttempt}/>
      <p>Heavy calculations result: {heavyCalculation}</p>
    </div>
  )
}