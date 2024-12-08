import { useState } from 'react';
import './App.css';


import Copyright from './components/copyright/Copyrgiht'
import ProductList from './components/productList/ProductList';
import ProductFilter from './components/filter/ProductFilter';

function App() {

  const [filterData, setFilterData] = useState( {
    name: '',
    priceFrom: '',
    priceTo: '',
    category: ''
  } );

  return (
    <div className="App simpleStyle">
      <h2>Products in the Store</h2>
      <ProductFilter setFilter={setFilterData}/>
      <ProductList filterData={filterData}/>
      <Copyright/>
    </div>
  );
}

export default App;