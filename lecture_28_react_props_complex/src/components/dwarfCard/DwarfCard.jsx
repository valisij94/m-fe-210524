import SimpleHeader from "../simpleHeader/SimpleHeader";

/*
2.2 В компоненте `DwarfCard`, добавьте кнопку с текстом `Describe`. На нее добавьте обработчик события клика, чтобы при клике мы бы выводили в консоль информацию о гноме вида "Гном ИМЯ_ГНОМА, владеет оружием ОРУЖИЕ_ГНОМА".
*/

export default function DwarfCard( {dwarfData} ) {

  const paragraphClickHandler = () => {
    console.log('This is a secret!');
  }

  const buttonClickHandler = () => {
    console.log(`Dwarf ${dwarfData.name}, has weapon ${dwarfData.weapon}`)
  }

  return (
    <div className="dwarfCardContainer">

      <SimpleHeader headerText={`${dwarfData.name} ${dwarfData.nickname}`}/>

      <p onClick={paragraphClickHandler}>Age: {dwarfData.age}</p>
      <p>Primary weapon: {dwarfData.weapon}</p>

      <button onClick={buttonClickHandler}>Describe</button>
    </div>
  )
}