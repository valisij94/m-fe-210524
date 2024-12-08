import { useEffect, useState } from "react";
import styles from './ProductList.module.css';
import ProductCard from "../productCard/ProductCard";

export default function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect( () => {
    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(data => setProducts(data.products));
  }, [])

  console.log('PL render')
  return (
    <div className={styles.productListContainer}>
      {products.map( (prod) => <ProductCard key={prod.id} product={prod}/>)}
    </div>
  );
}