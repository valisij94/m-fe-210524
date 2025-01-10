import { useSelector } from 'react-redux';
import ProductCard from '../productCard/ProductCard';
import styles from './ProductList.module.css';

export default function ProductList( {products} ) {

  const theme = useSelector(state => state.theme);

  return (
    <div className={`${styles.productListContainer} productListBox ${theme}`}>
      {
        products.map( prod => <ProductCard key={prod.id} product={prod} />)
      }
    </div>
  )
}