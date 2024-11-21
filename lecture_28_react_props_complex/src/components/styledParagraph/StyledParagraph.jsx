function StyledParagraph( { settings, array } ) {
  return (
    <div>
      <p className={settings.paragraphClass}>{settings.text}</p>

      {array.map( el => <p key={el}>{el}</p>)}

    </div>
  )
}

export default StyledParagraph;