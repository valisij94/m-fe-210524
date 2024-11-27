import { useState } from 'react';
import './App.css';

import LoginForm from './components/loginForm/LoginForm';
import Greeting from './components/greeting/Greeting';

function App() {

  const [loginValue, setLoginValue] = useState('');

  return (
    <div className="App simpleStyle">
      <LoginForm setLoginValue={setLoginValue}/>
      <Greeting userName={loginValue} />
    </div>
  );
}

export default App;