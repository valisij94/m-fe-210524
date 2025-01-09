import ProductCard from '../productCard/ProductCard';
import styles from './ProductList.module.css';

export default function ProductList( {products} ) {
  return (
    <div className={`${styles.productListContainer} productListBox`}>
      {
        products.map( prod => <ProductCard key={prod.id} product={prod} />)
      }
    </div>
  )
}