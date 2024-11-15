import './App.css';

import Copyright from './components/copyright/Copyrgiht';
import Header from './components/header/Header';
import Managers from './components/managers/Managers';

function App() {

  const middleEartAreas = ['Moria', 'Rivendalle', 'Isengard', 'Rohan', 'Gondor', 'Hobbiton', 'Shire'];
  return (
    <div className="App simpleStyle">
      <Header />
      <Managers />
      <Copyright/>
    </div>
  );
}

export default App;
