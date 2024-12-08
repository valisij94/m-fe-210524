import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';

export default function Button( {btnText, clickHandler} ) {

  const theme = useContext(ThemeContext);

  const styleObj = {
    color: theme === 'light' ? 'darkblue' : 'white',
    backgroundColor: theme === 'light' ? 'lightskyblue' : 'darkblue',
  }
  return (
    <button onClick={clickHandler} style={styleObj}>{btnText}</button>
  )
}