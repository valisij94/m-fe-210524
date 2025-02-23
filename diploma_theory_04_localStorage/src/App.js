import './App.css';
import { Routes, Route, Link } from "react-router";

import Copyright from './components/copyright/Copyrgiht.jsx';
import Home from './pages/Home.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  const [inputs, setInputs] = useState({login: '', email: '', phone: ''});
  const handleInputChange = (e) => {
    const { name } = e.target;
    const newState = { ...inputs, [name]: e.target.value };
    setInputs( newState );
    localStorage.setItem('inputs', JSON.stringify(newState));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!')
  }

  const updateCounter = (newValue) => {
    localStorage.setItem('counter', newValue);
    setCounter(newValue);
  }

  useEffect( () => {
    const persistedCounter = localStorage.getItem('counter');
    if (persistedCounter) {
      setCounter(+persistedCounter);
    }

    const persistedInputs = localStorage.getItem('inputs');
    if (persistedInputs) {
      setInputs(JSON.parse(persistedInputs));
    }
  }, []);

  return (
    <div className="App">
      <h2>Redux Toolkit and localStorage recovery</h2>
      <div className='mainPageContainer'>
        <div className='navBlock'>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
      <p>Counter value: {counter}</p>
      <button onClick={() => { updateCounter(counter + 1); }}>Increment</button>
      <button onClick={() => { updateCounter(counter - 1); }}>Decrement</button>

      <h3>Simple form</h3>
      <form>
        <input type='text' value={inputs.login} name='login' placeholder='login' onChange={handleInputChange}></input>
        <input type='text' value={inputs.email} name='email' placeholder='email' onChange={handleInputChange}></input>
        <input type='text' value={inputs.phone} name='phone' placeholder='phone' onChange={handleInputChange}></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <Copyright />
    </div>
  );
}

export default App;