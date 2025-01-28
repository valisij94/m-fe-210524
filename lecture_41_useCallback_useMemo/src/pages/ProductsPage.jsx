import { useEffect, useState } from "react"
import ProductList from "../components/productList/ProductList";
import ProductFilter from "../components/productList/ProductFilter";

export default function ProductsPage() {

  // MOCK DATA! SHOULD BE CHANGED!
  const fetching = false;
  const products = [];
  const error = '';

  useEffect( () => {
    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(data => {});
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