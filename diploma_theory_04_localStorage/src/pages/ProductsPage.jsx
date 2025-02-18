import { useEffect, useState } from "react"
import ProductList from "../components/productList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";

export default function ProductsPage() {

  const { products, status, error } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( fetchProducts() );
  }, []);

  return (
    <div className="productPage">
      <h2>See our great products!</h2>
      { status === 'loading' && <p>Please wait!</p>}
      <ProductList products={products} />
      {error && <p>Error: {error}</p>}
    </div>
  )
}