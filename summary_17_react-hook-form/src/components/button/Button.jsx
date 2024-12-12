import { useRef } from 'react';

export default function Button( {text, clickHandler} ) {

  // создаем реф. Аргументом будет начальное значение.
  const btnRef = useRef(null);

  // делаем реф для хранения счетчика
  const countRef = useRef(0);

  // это понадобится чуть позже
  const btnClickHandler = (e) => {
    clickHandler && clickHandler(e);

    countRef.current += 1;

    console.log('Now current is', countRef.current)
  }

  console.log('Button is rendered')
  return (
    /* указыываем, к какому DOM-элементу мы прикрепляем реф */
    <button onClick={btnClickHandler} ref={btnRef}>{text}</button>
  );
}