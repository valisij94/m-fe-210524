import paragraphStyles from './SimpleParagraph.module.css';

function SimpleParagraph( props ) {

  const currentSeason = 'Autumn';

  const containerStyles = {
    padding: '10px',
    backgroundColor: 'blue',
    color: props.textColor
  }

  return (
    <div
      className={paragraphStyles.container}
      style={containerStyles}>
      <p
        className={`${paragraphStyles.myFirstClass}
        ${paragraphStyles.simpleStyle}`}
      >
        {props.textContent}
      </p>
    </div>
  );
}

export default SimpleParagraph;