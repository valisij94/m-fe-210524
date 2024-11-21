
/*
1.1 В компоненте `SimpleHeader`, добавьте проп `customStyles`, который будет принимать объект со свойтствами `fontSize`, `color` - для определения размера шрифта заголовка и цвета текста соответственно. Примените этот проп в компоненте, для задания инлайн-стилей заголовку.
*/

function SimpleHeader( {customStyles = {}, headerText} ) {

  const clickHandler = (event) => {
    console.log('Clicked on H1', event);
  }

  return <h1
    style={ customStyles }
    onClick={ clickHandler }
  >
    {headerText}
  </h1>;
}

export default SimpleHeader;