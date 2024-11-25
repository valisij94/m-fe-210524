import './App.css';
import Button from './components/button/Button';

import Copyright from './components/copyright/Copyrgiht';
import FlexContainer from './components/flexContainer/FlexContainer';
import TextField from './components/textField/TextField';

function App() {

  const btnClickHandler = () => {
    console.log('Hello World!');
  }

  return (
    <div className="App simpleStyle">
      <TextField
        placeholder="hey"
        errorText="Wow!"
        helpText="HelpText"
        label="Label for input"
        size='medium'
      />

      <FlexContainer>
        <p>SimpleParagrpahText</p>
        <Button buttonText="Click Me!" clickHandler={btnClickHandler} />
        <input placeholder='bububu'/>
      </FlexContainer>

      <Copyright/>
    </div>
  );
}

export default App;
