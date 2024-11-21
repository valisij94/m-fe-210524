import DwarfCard from "../dwarfCard/DwarfCard"

export default function DwarfList( {listHeaderText = "Dwarwes List", dwarwes} ) {

  return (
    <div className='dwarwesListContainer'>
      <h4>{listHeaderText}</h4>

      {/*
      1.4. Вспоминаем условный рендеринг. Если в компонент `DwarfList` в качестве пропа `dwarwes` передан пустой массив, или не передано ничего - компонент должен рендерить заголовок `h4` с текстом `Empty dwarwes list!`.
      */}

      {
        dwarwes && dwarwes.length > 0 ?
        dwarwes.map( el => {
          return (
            <DwarfCard key={el.name} dwarfData={el}/>
          )
        }) :
        <h4>Empty dwarwes list!</h4>
      }
    </div>
  )
}