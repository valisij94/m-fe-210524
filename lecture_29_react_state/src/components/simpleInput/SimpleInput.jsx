import  { useState } from 'react';

export default function SimpleInput( {placeholder, required, minLength, maxLength } ) {

  const [value, setValue] = useState('');
  const [errorText, setErrorText] = useState('');

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  }

  const blurHandler = (event) => {
    const inputValue = event.target.value;
    if (!!required && !inputValue) {
      setErrorText('Fill this field!');
      return;
    }
    if (!!minLength && inputValue.length < minLength) {
      setErrorText('Too short! Min length is ' + minLength);
      return;
    }
    if (!!maxLength && inputValue.length > maxLength) {
      setErrorText('Too long! Max length is ' + maxLength);
      return;
    }
    setErrorText('');
  }

  return (
    <div>
      <input
        className='sinpleInput'
        placeholder={placeholder}
        value={value}
        onChange={inputChangeHandler}
        onBlur={blurHandler}
      />
      { errorText.length > 0 && <p>{errorText}</p> }
    </div>
  )
}