import { useEffect, useState } from "react"
import ProductList from "../components/productList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { productsFailed, productsLoaded, startProductsFetching } from "../redux/actions/productActions";
import ProductFilter from "../components/productList/ProductFilter";

export default function ProductsPage() {

  /* Работа с локальным состоянием компонента
  const [fetching, setFetching] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect( () => {

    setFetching(true);

    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(data => {
        setProducts(data.products);
        setError('');
      })
      .catch(err => setError(err.message))
      .finally( () => setFetching(false));
  }, [])
  */

  /** Работа с редакс-стейтом */
  const dispatch = useDispatch();
  const { filteredProducts: products, fetching, error } = useSelector( state => state.products);

  useEffect( () => {

    dispatch( startProductsFetching() );

    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(data => {
        dispatch( productsLoaded(data.products) );
      })
      .catch(err => dispatch( productsFailed(err.message) ) );
  }, [])

  return (
    <div className="productPage">
      <h2>See our great products!</h2>
      { fetching && <p>Please wait!</p>}
      <ProductFilter />
      <ProductList products={products} />
      {error && <p>Error: {error}</p>}
    </div>
  )
}