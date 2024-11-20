import paragraphStyles from './SimpleParagraph.module.css';

function SimpleParagraph() {

  const currentSeason = 'Autumn';

  const containerStyles = {
    padding: '10px',
    backgroundColor: 'blue'
  }

  return (
    <div className={paragraphStyles.container} style={containerStyles}>
      <p className={`${paragraphStyles.myFirstClass} ${paragraphStyles.simpleStyle}`}>Some text {new Date().toLocaleString()}, now is {currentSeason}</p>
    </div>
  );
}

export default SimpleParagraph;