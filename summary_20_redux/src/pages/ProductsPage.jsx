import { useEffect, useState } from "react"
import ProductList from "../components/productList/ProductList";
import ProductFilter from "../components/productList/ProductFilter";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";

export default function ProductsPage() {

  const dispatch = useDispatch();
  const {products, status, error} = useSelector(state => state.products);

  useEffect( () => {
    dispatch( fetchProducts() );
  }, [])

  return (
    <div className="productPage">
      <h2>See our great products!</h2>
      { status !== 'idle' && <p>Please wait!</p>}
      <ProductFilter />
      <ProductList products={products} />
      {error && <p>Error: {error}</p>}
    </div>
  )
}