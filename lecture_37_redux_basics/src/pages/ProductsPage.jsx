import { useEffect, useState } from "react"
import ProductList from "../components/productList/ProductList";
import { useParams } from "react-router";

export default function ProductsPage() {

  const [products, setProducts] = useState([]);

  const { category_name } = useParams();

  useEffect( () => {
    fetch(`https://dummyjson.com/products${category_name ? '/category/' + category_name : ''}`)
      .then( resp => resp.json() )
      .then( data => setProducts(data.products) );
  }, [category_name]);

  return (
    <div className="productPage">
      <h2>See our great products!</h2>
      <p>{category_name ? `${category_name} selected!` : 'No category selected!'}</p>
      <ProductList products={products} />
    </div>
  )
}