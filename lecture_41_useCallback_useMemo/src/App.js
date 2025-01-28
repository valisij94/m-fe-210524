import './App.css';
import { Routes, Route, Link } from "react-router";

import Copyright from './components/copyright/Copyrgiht.jsx';
import Home from './pages/Home.jsx';
import CallbackPage from './pages/CallbackPage.jsx';

function App() {

  return (
    <div className="App">
      <h2>Introduction into Redux state manager</h2>
      <div className='mainPageContainer'>
        <div className='navBlock'>
          <Link to='/'>Home</Link>
          <Link to='/callbacks'>Callbacks Page</Link>
          {/* <Link to='/products'>Products</Link> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callbacks" element={<CallbackPage />} />
          {/* <Route path="/products" element={<ProductsPage />} /> */}
        </Routes>
      </div>
      <Copyright />
    </div>
  );
}

export default App;