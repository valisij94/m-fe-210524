import './App.css';

import Copyright from './components/copyright/Copyrgiht';
import SimpleInput from './components/simpleInput/SimpleInput';

function App() {

  return (
    <div className="App simpleStyle">
      <SimpleInput placeholder='something'/>
      <SimpleInput placeholder='required' required={true}/>
      <SimpleInput placeholder='minLength' minLength={3}/>
      <SimpleInput placeholder='maxLength' maxLength={5}/>
      <SimpleInput placeholder='minMax' minLength={3} maxLength={5}/>
      <Copyright/>
    </div>
  );
}

export default App;