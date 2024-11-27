import { useState } from 'react';

export default function Human( { humanName} ) {

  const [input, setInput] = useState(''); // это для инпута, в который будем вводить названия вещей чтобы положить в карман
  const [pockets, setPockets] = useState( ['phone', 'keys'] ); // по умолчанию в карманах телефон и ключи

  const addSomething = () => {
    // Кладем в карман
    setPockets( (old) => {
      return [ ...old, input ]
    } );
  }

  // Обработчик события ввода чего-то в инпут
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <h3>Human, my name {humanName}</h3>
      {
        pockets.map(thing => <p key={thing}>{thing}</p>)
      }
      <input type='text' value={input} onChange={handleInputChange}/>
      <button onClick={addSomething}>Add something</button>
    </div>
  )
}