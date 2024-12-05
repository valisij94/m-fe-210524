import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

export default function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect( () => {
    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(data => setProducts(data.products));
  }, [])

  return (
    <div className="productListContainer">
      {products.map( (prod) => <ProductCard key={prod.id} product={prod}/>)}
    </div>
  );
}