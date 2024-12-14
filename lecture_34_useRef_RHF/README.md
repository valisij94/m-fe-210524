# README

## Лекционное занятие №34

### Тема:

Репозитарий содержит материалы по занятию, посвященному хуку `useRef`, и работе с библиотекой `react-hook-form`.

### Цели занятия
- повторение и закрепление знаний;
- решение задач.

### Зачем это нужно
Сегодня мы будем говорить о хуке `useRef`. Он нужен нам в тех случаях, когда нужно получить прямой доступ к DOM-элементам. То есть, не к React-компонентам/элементам, а именно к реальному DOM. То есть в тех случаях, когда нам нужен императивный подход. Есть несколько случаев, когда имеет смысл использовать этот хук:
 - прямой доступ к DOM-элементам. Он нужен, если мы хотим, например, сделать какую-то анимацию. Или управлять фокусом. Или скроллом. Или какими-то API браузера, которые не предоставляются React - к примеру, IntersectionObserver, ResizeObserver, ...
 - хранение какого-то значения так, чтобы оно переживало ререндер, и его изменение не перерисовывало бы компонент.

### Императивная работа с DOM
Рассмотрим первый кейс использования, когда мы хотим получить прямой доступ к DOM-элементу. В этом случае, использование состоит из двух шагов: создать реф, и указать, к какому DOM-элементу мы хотим его применить. Важный момент - **рефы можно применять ТОЛЬКО к DOM-элементам.** Имеется в виду, что не получится создать реф на свой компонент.

```
import { useRef } from 'react';

export default function Button( {text, clickHandler} ) {

  // создаем реф. Аргументом будет начальное значение.
  const btnRef = useRef(null);

  // это понадобится чуть позже
  const btnClickHandler = (e) => {
    clickHandler(e);
  }

  return (
    /* указыываем, к какому DOM-элементу мы прикрепляем реф */
    <button onClick={btnClickHandler} ref={btnRef}>{text}</button>
  );
}
```

Все, теперь в рефе у нас хранится прямая ссылка на DOM-элемент.

Если мы выведем в консоль `btnRef`, мы увидим, что это обычный JS-объект, у которого есть свойство `current`. Это свойство содержит ссылку на DOM-элемент. И теперь мы можем работать с этой ссылкой как с обычным DOM-элементом. Например, вывести в консоль реальный размер нашей кнопки.

```
const btnClickHandler = (e) => {
  console.log('Real sizes:', btnRef.current.offsetWidth, btnRef.current.offsetHeight);
  clickHandler(e);
}
```

И это - единственный вариант получить фактические размеры нашего элемента.

**Закрепим практикой**
1. Добавить в компонент `App.js` инпут (например, для ввода нового дела). Разместить его перед списком дел. Нужно сделать так, чтобы при ПЕРВОМ рендере компонента, фокус становился на этот инпут. Тут нам тоже помогут рефы.
2. Еще работа с DOM. В компоненте `TodoList`, добавьте реф на контейнер. При первом рендере компонента, выводите в консоль его фактические размеры (offsetWidth, offsetHeight)
3. Закрепление императивной работы с DOM. Добавьте в компонент `App.js` кнопку. При нажатии на кнопку, выводить в консоль значение инпута из п.1. Сделать это БЕЗ использования `useState`, через рефы.

### Хранение данных между рендерами
Еще один вариант использования рефов - это использование их как хранилища данных. Очень похоже на стейт, но есть 2 существенных отличия:
 - значение свойства `current` у рефа является мутабельным, то есть его можно изменять напрямую
 - изменение этого свойства НЕ заставляет компонент перерисоваться.

При этом, значение в рефе переживет ререндер.

Пример использования - сделаем счетчик кликов на кнопке, изменение которого не приводжит к ререндеру.
```
import { useRef } from 'react';

export default function Button( {text, clickHandler} ) {

  // создаем реф. Аргументом будет начальное значение.
  const btnRef = useRef(null);
  const counterRef = useRef(0);

  // это понадобится чуть позже
  const btnClickHandler = (e) => {
    clickHandler(e);
    counterRef.current += 1;
    console.log('Now clicks count is:', counterRef.current);
  }

  console.log('Button component rendered');

  return (
    { /* указыываем, к какому DOM-элементу мы прикрепляем реф */ }
    <button onClick={btnClickHandler} ref={btnRef}>{text}</button>
  );
}
```

Мы видим, что при нажатии на кнопку, в консоли отображается изменяющийся счетчик. При этом сам компонент не перерисовывается. То есть, мы храним некое значение, меняем его, и его изменение не провоцирует ререндер.

**Закрепим практикой**
1. Пристрелочная. Создать реф на инпут в компоненте `App`.
2. Еще пристрелочная. Создать рефы на все инпуты (имя, телефон). Добавить обработчик на кнопку `Click me!` - он должен выводить в консоль значения, которые введены в инпуты.
3. Реализовать подсчет кликов на кнопке в компоненте `App`, при этом при изменении счетчика НЕ ПЕРЕРИСОВЫВАТЬ компонент.
4. Императивная работа с DOM-элементами. Нужно сделать так, чтобы при ПЕРВОМ рендере компонента `App`, фокус становился на поле ввода телефона.
5. Еще работа с DOM. Нужно при клике на кнопку в компоненте `App`, вывести в консоль актуальные ширину и высоту инпутов для ввода имени и телефона (через свойствa `offsetWidth, offsetHeight` DOM-элемента).
6. Закрепление императивной работы с DOM. Нужно при нажатии на кнопку в компоненте `App`, выводить в консоль значения инпутов "логин", "пароль". Сделать это БЕЗ использования `useState`, через рефы.

### Библиотека react-hook-form
Библиотеки нужны, чтобы решать рутинные задачи средствами, которые кто-то уже придумал. Например, задача работы с формами и инпутами является рутинной, и требует большого объема шаблонного кода: сделать инпуты контролируемыми, прописать валидацию, обеспечить обязательность/необязательность, и т.д. Для решения такого рода рутинных задач предназначена библиотека `react-hook-form`. Она использует рефы для работы с элементами формы, чтобы изббежать лишних ререндеров. Сегодня мы познакомимся с ней. Сама библиотека уже добавлена в зависимости нашего проекта, и с ней можно работать.

Краеугольным камнем библиотеки является **кастомный хук** `useForm`. Он возвращает нам объект с большим количеством полезных свойств, некоторые из них мы сегодня научимся использовать.

Предположим, у нас есть компонент, который отвечает за рендер формы регистрации. Изначально, у нас есть только разметка:
```
export default function RegisterForm() {

  return (
    <form className='registerForm'>
      <label htmlFor='nameInput'>Name</label>
      <input id='nameInput' placeholder='Name' />
      <label htmlFor='phoneInput'>Phone</label>
      <input id='phoneInput' placeholder='Phone' />
      <select id='accountType'>
        <option value="basic">Basic</option>
        <option value="luxury">Luxury</option>
      </select>
      <button type="submit">Register</button>
    </form>
  )
}
```

Если мы будем реализовывать логику работы через локальный стейт - то это реально, но долго, и много шаблонного кода. Попробуем сделать с использованием `react-hook-form`.

```
import { useForm } from 'react-hook-form';

export default function RegisterForm() {
  // используем хук useForm из библиотеки, и берем из него некоторые полезные свойства.
  // В частности, инструмент для регистрации инпутов в библиотеке (чтобы делегировать работу с ними библиотеке),
  // и обработчик события отправки (сабмита) формы
  const { register, handleSubmit } = useForm();

  // а это - наш обработчик сабмита формы (т.е. мы хотим выполнить эту логику при сабмите)
  const onSubmit = data => console.log(data);

  return (
    <form className='registerForm' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='nameInput'>Name</label>
      <input id='nameInput' placeholder='Name' { ...register('name') } />
      <label htmlFor='phoneInput'>Phone</label>
      <input id='phoneInput' placeholder='Phone' { ...register('phone') }/>
      <select id='accountType' { ...register('accountType') }>
        <option value="basic">Basic</option>
        <option value="luxury">Luxury</option>
      </select>
      <button type="submit">Register</button>
    </form>
  )
}
```

Мы импортировали хук, вызвали его, и получили объект с массой непонятных свойств. Попробуем разобраться.
 - свойство `register` - наверное самое полезное. Это функция для регистрации инпутов в библиотеке. Регистрацией инпута мы перекладываем всю логику работы с инпутом на библиотеку. Нам нужно только указать, как мы хотим назвать инпут, и возможно указать дополнительные свойства (об этом чуть позже). Имена инпутов должны быть уникальными в пределах формы!
 - свойство `handleSubmit` - несложно догадаться, что это обработчик события сабмита формы. Он ожидает двух аргументов: что делать, если форма успешно провалидирована, и что делать если не так.

Функция `register` возвращает нам ОБЪЕКТ, который мы разворачиваем в атрибуты наших инпутов. Таким образом, мы добавляем им "вспомогательные" атрибуты, с которыми будет работать библиотека. И наша задача - просто зарегистрировать инпуты.

Следующая шаблонная задача - это валидация. Нам нужно валидировать поля перед сабмитом - например, сделать какие-то поля обязательными, каким-то полям задать минимальную/максимальную длину, а какие-то проверить на соответствие шаблону (например, регулярному выражению). Или вообще реализовать свою валидацию. В этом всем нам поможет второй аргумент функции `register` - это объект, который содержит правила валидации для инпута.

```
// Регистрируем обязательный инпут
<input placeholder='Name' { ...register('name', {required: true} ) } />
// Регистрируем инпут с минимальной длиной 3
<input placeholder='Min Length' { ...register('minLength', {minLength: 3} ) } />
// Регистрируем инпут с максимальной длиной 5
<input placeholder='Max Length' { ...register('maxLength', {maxLength: 5} ) } />
// регистрируем инпут с валидацией по регулярному выражению (10 цифр)
<input placeholder='Regexp' { ...register('regexp', {pattern: /^\d{10}$/} ) } />
// Регистрируем инпут с кастомной функцией валидации
<input
  {...register("customValidation", {
    validate: (value, formValues) => value === 'Correct value'
  })}
/>
```

Особое внимание следует обратить на кастомную функцию валидации. Это шикарная возможность валидировать не только инпут сам по себе, но и в связке со значениями других инпутов (formValues).

**Закрепим практикой**
1. Есть компонент `SimpleForm.jsx`. Добавьте в него использование `react-hook-form`. Зарегистрируйте инпуты (используйте имена name, email, phone, accountType при регистрации).
2. Добавьте обработчик события сабмита в форму - нужно выводить данные формы в консоль.
3. Добавляем валидацию. Сделайте поля name, email обязательными к заполнению.
4. Добавьте полю name максимальную длину - 10 символов.
5. Добавьте валидацию емейла по регэкспу /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

### Полезные ссылки
[Использование рефов](https://react.dev/learn/referencing-values-with-refs#) - работа с рефами как с хранилищем.
[Императивная работа с DOM](https://react.dev/learn/manipulating-the-dom-with-refs) - работа с DOM напрямую.
[Хук useRef](https://react.dev/reference/react/useRef) - информативно, с интерактивными примерами.
[Библиотека react-hook-form](https://www.react-hook-form.com/get-started/) - официальная документация проекта. Очень информативная, и с примерами.