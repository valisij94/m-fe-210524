import './App.css';


import Copyright from './components/copyright/Copyrgiht'
import ProductList from './components/productList/ProductList';
function App() {

  return (
    <div className="App simpleStyle">
      <h2>Products in the Store</h2>
      <ProductList />
      <Copyright/>
    </div>
  );
}

export default App;