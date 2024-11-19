function StyledParagraph(props) {
  return (
    <p className={props.paragraphClass}>{props.text}</p>
  )
}

export default StyledParagraph;