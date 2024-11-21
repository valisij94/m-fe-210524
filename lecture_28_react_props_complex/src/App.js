import './App.css';

import Copyright from './components/copyright/Copyrgiht';
import DwarfList from './components/dwarfList/DwarfList.jsx';
import SimpleHeader from './components/simpleHeader/SimpleHeader';

import { dwarwesArray } from './data/dwarwes.js'

function App() {

  return (
    <div className="App simpleStyle">
      <SimpleHeader
        customStyles={ { color: 'red', fontSize: '20px' } }
        headerText="Hello!"
      />

      <DwarfList
        listHeaderText="Brave dwarwes!"
        dwarwes={dwarwesArray}
      />

      <Copyright/>
    </div>
  );
}

export default App;