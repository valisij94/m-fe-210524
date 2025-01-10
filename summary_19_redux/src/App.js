import './App.css';
import { Routes, Route, Link } from "react-router";

import Copyright from './components/copyright/Copyrgiht.jsx';
import Home from './pages/Home.jsx';
import ProductsPage from './pages/ProductsPage.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { switchThemeAction } from './redux/actions/themeActions.js';

function App() {

  const theme = useSelector( state => state.theme );
  const dispatch = useDispatch();

  const switchThemeHandler = () => {
    dispatch(switchThemeAction());
  }

  return (
    <div className="App">
      <h2>Introduction into Redux state manager</h2>
      <button onClick={switchThemeHandler}>Now theme is: {theme}</button>
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
      <Copyright />
    </div>
  );
}

export default App;