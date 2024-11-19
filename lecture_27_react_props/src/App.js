import logo from './logo.svg';
import './App.css';

import Copyright from './components/copyright/Copyrgiht';
import SimpleHeader from './components/simpleHeader/SimpleHeader';

import { dwarwesArray } from './data/dwarwes.js';
import DwarfCard from './components/dwarfCard/DwarfCard';

function App() {
  return (
    <div className="App simpleStyle">
      <SimpleHeader
        headerText="Simple header text"
      />
      {dwarwesArray.map( el => {
        return (
          <DwarfCard
            key={el.name + el.nickname}
            name={el.name}
            nickname={el.nickname}
            age={el.age}
            primaryWeapon={el.weapon}
          />
        )
      } )}

      <Copyright/>
    </div>
  );
}

export default App;
