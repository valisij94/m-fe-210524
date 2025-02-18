import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../productCard/ProductCard';
import styles from './ProductList.module.css';
import { clearCart } from '../../redux/slices/cartSlice';

export default function ProductList( {products} ) {

  const cartData = useSelector( state => state.cart );
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => console.log(cartData)}>Log Cart</button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <div className={`${styles.productListContainer} productListBox`}>
        {
          products.map( prod => <ProductCard key={prod.id} product={prod} />)
        }
      </div>
    </div>
  )
}