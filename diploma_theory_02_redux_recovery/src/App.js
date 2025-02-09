import './App.css';
import { Routes, Route, Link } from "react-router";

import Copyright from './components/copyright/Copyrgiht.jsx';
import Home from './pages/Home.jsx';
import ProductsPage from './pages/ProductsPage.jsx';

function App() {

  return (
    <div className="App">
      <h2>Redux Toolkit recovery</h2>
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