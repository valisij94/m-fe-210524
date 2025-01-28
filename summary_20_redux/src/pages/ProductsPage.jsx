import { useEffect, useState } from "react"
import ProductList from "../components/productList/ProductList";
import ProductFilter from "../components/productList/ProductFilter";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import useProductsFilter from "../hooks/useProductsFilter";

export default function ProductsPage() {

  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( fetchProducts() );
  }, [])

  const hookValue = useProductsFilter();

  return (
    <div className="productPage">
      <h2>See our great products!</h2>
      { hookValue.status !== 'idle' && <p>Please wait!</p>}
      <ProductFilter />
      <ProductList products={hookValue.filteredProducts} />
      {hookValue.error && <p>Error: {hookValue.error}</p>}
    </div>
  )
}