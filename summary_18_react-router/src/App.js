import './App.css';
import { Routes, Route } from "react-router";

import Copyright from './components/copyright/Copyrgiht.jsx';
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';
import ProductsPage from './pages/ProductsPage.jsx';

function App() {

  return (
    <div className="App">
      <h2>This header will be rendered in ALL cases, independently of the route</h2>
      <div className='mainPageContainer'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category_name?" element={<ProductsPage />} />
          <Route path="/details/:detail_id?/:someOther?" element={<Detail />} />
        </Routes>
      </div>
      <Copyright />
    </div>
  );
}

export default App;